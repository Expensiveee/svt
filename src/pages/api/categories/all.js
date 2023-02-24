import { promises as fs } from "fs";
import path from "path";

const CATEGORIES_PATH = path.join(process.cwd(), "categories");

export default async function handler(req, res) {
  const categories = await fs.readdir(CATEGORIES_PATH);

  // Read all meta.json files and return them as an array
  const categoriesWithMeta = await Promise.all(
    categories.map(async (category) => {
      const fullPath = path.join(CATEGORIES_PATH, category, "meta.json");
      
      return await fs.readFile(fullPath, "utf8").then((data) => {
        const { name, description, slug, count } = JSON.parse(data);
        return {
          name,
          description,
          slug,
          count
        };
      });
    })
  );
  res.status(200).json(categoriesWithMeta);
}
