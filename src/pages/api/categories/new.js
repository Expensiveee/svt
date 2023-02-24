import { promises as fs } from "fs";
import path from "path";

const CATEGORIES_PATH = path.join(process.cwd(), "categories");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(400).json({ message: "Bad request" });
    return;
  }

  const { name, description } = req.body;
  const slug = name
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, "-");

  const categories = await fs.readdir(CATEGORIES_PATH);
  if (categories.find((c) => c === slug))
    return res
      .status(400)
      .json({ message: "Une categorie avec ce nom existe déjà" });

  const category = {
    slug,
    name,
    description,
    count: 0,
  };

  const flashcards = {};

  await fs.mkdir(path.join(CATEGORIES_PATH, category.slug));
  await fs.writeFile(
    path.join(CATEGORIES_PATH, category.slug, "meta.json"),
    JSON.stringify(category)
  );

  await fs.writeFile(
    path.join(CATEGORIES_PATH, category.slug, "flashcards.json"),
    JSON.stringify(flashcards)
  );

  res.status(200).json(category);
}
