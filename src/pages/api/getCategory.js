import connectMongo from "@utils/connectMongo";
import Category from "@utils/models/category";

export default async function getCategory(req, res) {
  const { slug } = req.body;

  if (!slug)
    return res.status(400).json({ error: "Des informations sont manquantes" });

  try {
    await connectMongo();
    const category = await Category.findOne({ "meta.slug": slug });
    if (!category)
      return res.status(400).json({ error: "Catégorie pas trouvé" });

    // Shuffle category flashcards
    category.flashcards.sort(() => Math.random() - 0.5);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error });
  }
}
