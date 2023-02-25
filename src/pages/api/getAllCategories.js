import connectMongo from "@utils/connectMongo";
import Category from "@utils/models/category";

export default async function getAllCategories(req, res) {
  try {
    await connectMongo();
    const allCategories = await Category.find();
    res.json(allCategories);
  } catch (error) {
    res.status(400).json({ error });
  }
}
