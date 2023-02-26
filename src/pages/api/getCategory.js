import connectMongo from "@utils/connectMongo";
import Category from "@utils/models/category";

export default async function getCategory(req, res) {
  const { slug } = req.body;

  if (!slug)
    return res.status(400).json({ error: "Des informations sont manquantes" });

  try {
    await connectMongo();
    if (slug === "all") {
      const categories = await Category.find();
      const flashcards = categories.map((category) => category.flashcards);
      return res.status(200).json({
        flashcards: flashcards.flat().sort(() => Math.random() - 0.5),
        statistics: {
          correct: 0,
          wrong: 0,
        },
        meta: {
          count: flashcards.flat().length,
          name: "Tous les paquets de Flashcards!",
          description: "Le paquet qui tue",
          slug: "/all",
        }
      });
    } else {
      const category = await Category.findOne({ "meta.slug": slug });
      if (!category)
        return res.status(400).json({ error: "Chapitre pas trouvé" });

      category.flashcards = category.flashcards.sort(() => Math.random() - 0.5);

      res.status(200).json(category);
    }
  } catch (error) {
    res.status(400).json({ error });
  }
}
