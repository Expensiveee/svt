import connectMongo from "@utils/connectMongo";
import Category from "@utils/models/category";

export default async function editStatistics(req, res) {
  const { slug, correct, wrong } = req.body;

  if (!slug)
    return res.status(400).json({ error: "Des informations sont manquantes"});

  try {
    await connectMongo();
    const category = await Category.findOne({ "meta.slug": slug });
    if (!category)
      return res.status(400).json({ error: "Catégorie pas trouvé" });

    category.statistics.correct += correct;
    category.statistics.wrong += wrong;

    await category.save();

    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error });
  }
}
