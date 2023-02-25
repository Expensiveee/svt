import connectMongo from "@utils/connectMongo";
import Category from "@utils/models/category";

export default async function addFlashcard(req, res) {
  const { slug, flashcard } = req.body;
  if (!slug || !flashcard)
    return res.status(400).json({ error: "Des informations sont manqauantes" });

  try {
    await connectMongo();
    const category = await Category.findOne({ "meta.slug": slug });
    if (!category) return res.status(400).json({ error: "Catégorie pas trouvé" });
    category.flashcards.push(req.body.flashcard);
    category.meta.count = category.flashcards.length;

    await category.save();

    res.status(200).json(category);
  } catch (error) {
    if(error.code === 11000) return res.status(400).json({ error: "Flashcard déjà existant" });
    res.status(400).json({ error });
  }
}
