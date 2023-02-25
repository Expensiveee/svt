import { Schema, model, models } from "mongoose";

const categorySchema = new Schema({
  meta: {
    name: String,
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    description: String,
    count: Number,
  },
  statistics: {
    correct: Number,
    wrong: Number,
  },
  flashcards: [
    {
      type: Object,
      ref: "Flashcard",
    },
  ],
});

module.exports = models.Category || model("Category", categorySchema);
