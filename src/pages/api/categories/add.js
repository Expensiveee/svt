import { promises as fs } from "fs";
import path from "path";

const CATEGORIES_PATH = path.join(process.cwd(), "categories");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(400).json({ message: "Bad request" });
    return;
  }
  const slug = "corps-humain-et-sant-";
  const recto = "Neuro?";
  const verso = "Acéthylcoline";

  const fullPath = path.join(CATEGORIES_PATH, slug, "flashcards.json");
  const flashcards = await fs
    .readFile(fullPath)
    .then((buffer) => JSON.parse(buffer))
    .catch((e) => null);

  console.log(flashcards);

  if (!flashcards)
    return res
      .status(400)
      .json({ message: "Categorie pas trouvé dans la base de donnée" });

  const flashcard = {
    recto,
    verso,
    date: new Date().getTime(),
    right: 0,
    wrong: 0,
  };

  await fs
    .writeFile(
      fullPath,
      JSON.stringify({ ...flashcards, [flashcard.date]: { ...flashcard } }, null, 4)
    )
    .catch((e) => {
      console.log(e);
      res.status(400).json({
        message:
          "Errreur lors de la création de flashcard, veuillez contactez Ghali",
      });
    });

  res.status(200).json(flashcard);
}
