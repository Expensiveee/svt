import { promises as fs } from "fs";
import path from "path";

const CATEGORIES_PATH = path.join(process.cwd(), "categories");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(400).json({ message: "Bad request" });
    return;
  }

  const { slug } = req.body;

  const metadataPath = path.join(CATEGORIES_PATH, slug, "meta.json");
  const flashcardsPath = path.join(CATEGORIES_PATH, slug, "flashcards.json");

  const metadata = await fs
    .readFile(metadataPath, "utf8")
    .then((meta) => {
      return JSON.parse(meta);
    })
    .catch((e) => {
      res.status(404).json({ message: "Categorie pas trouvé" });
    });

  if (!metadata) return;

  const flashcards = await fs
    .readFile(flashcardsPath, "utf8")
    .then((flashcards) => {
      return JSON.parse(flashcards);
    })
    .catch((e) => {
      res.status(404).json({ message: "Categorie pas trouvé" });
    });

  if (!flashcards) return;

  res.status(200).json({ metadata, flashcards });
}
