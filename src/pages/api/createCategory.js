import connectMongo from "@utils/connectMongo";
import Category from "@utils/models/category";

export default async function createCategory(req, res) {
  const { name, description } = req.body;

  if (!name || !description)
    return res.status(400).json({ error: "Des informations sont manquantes" });

  const slug = name
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, "-");

  try {
    await connectMongo();
    const category = new Category({
      meta: {
        name,
        slug,
        description,
        count: 0,
      },
      flashcards: [],
    });
    await category.save();
    res.status(200).json(category);
  } catch (error) {
    if (error.code === 11000)
      return res.status(400).json({ error: "Catégorie déjà existante" });

    res.status(400).json({ error });
  }
}
