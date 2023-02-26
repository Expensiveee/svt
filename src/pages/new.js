import { useState } from "react";
import * as S from "@styles/new";
import Button from "@components/Button";
import { toast } from "react-toastify";
import axios from "axios";

const categories = [
  "Génétique et Évolution",
  "À la recherche du passé géologique de la Terre",
  "L'évolution des climats de la Terre",
  "Corps humain et Santé",
  "De la plante sauvage à la plante domestique",
];

const New = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName === "") {
      toast("Veuillez entrer un nom de chapitre");
      return;
    }

    const category = {
      name: categoryName,
      description: categoryDescription,
    };

    axios
      .post("https://svt.expensiveee.me/api/createCategory", category)
      .then(() => {
        toast("Paquet de flashcards crée avec succès");
        setCategoryName("");
        setCategoryDescription("");
      })
      .catch((err) => {
        if (err?.response?.data?.error)
          return toast(err?.response?.data?.error);
        toast(
          "Une erreur est survenue, veuillez contactez l'administrateur (Ghali qui est moi)"
        );
      });
  };

  const handleCategoryName = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSelectedCategory = (e) => {
    setCategoryDescription(e.target.value);
  };

  return (
    <S.Container>
      <S.Title>Crée un nouveau paquet de flashcards </S.Title>
      <S.Main>
        <S.Form>
          <S.Label htmlFor="categoryName">Titre du chapitre</S.Label>
          <S.Input
            type="text"
            id="categoryName"
            name="categoryName"
            value={categoryName}
            onChange={handleCategoryName}
            placeholder="Exemple: La régulation du glucose"
          />
          <S.Label htmlFor="categoryDescription">
            Partie du cours qui concerne ce chapitre
          </S.Label>
          <S.Select onChange={handleSelectedCategory}>
            <option value={""}>-----------------</option>
            {categories.map((category, i) => {
              return (
                <option key={i} value={category}>
                  {category}
                </option>
              );
            })}
          </S.Select>
          <Button
            style={{ marginTop: "2rem" }}
            theme="primary"
            width="220px"
            height="50px"
            onClick={handleSubmit}
          >
            Créer
          </Button>
        </S.Form>
      </S.Main>
    </S.Container>
  );
};

export default New;
