import { useState } from "react";
import * as S from "@styles/new";
import Button from "@components/Button";
import { toast } from "react-toastify";
import axios from "axios";

const New = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName === "") {
      toast("Veuillez entrer un nom de catégorie");
      return;
    }

    const category = {
      name: categoryName,
      description: categoryDescription,
    };

    axios
      .post("/api/categories/new", category)
      .then(() => {
        toast("Catégorie créée avec succès");
        setCategoryName("");
        setCategoryDescription("");
      })
      .catch((err) => {
        if(err.response.data.message) return toast(err.response.data.message);
        toast(
          "Une erreur est survenue, veuillez contactez l'administrateur (Ghali qui est moi)"
        );
      });
  };

  const handleCategoryName = (e) => {
    setCategoryName(e.target.value);
  };

  const handleCategoryDescription = (e) => {
    setCategoryDescription(e.target.value);
  };

  return (
    <S.Container>
      <S.Title>Crée une nouvelle catégorie</S.Title>
      <S.Main>
        <S.Form>
          <S.Label htmlFor="categoryName">Nom de la catégorie (requis)</S.Label>
          <S.Input
            type="text"
            id="categoryName"
            name="categoryName"
            value={categoryName}
            onChange={handleCategoryName}
            placeholder="Exemple: Corps humain et santé"
          />
          <S.Label htmlFor="categoryDescription">
            Description de la catégorie
          </S.Label>
          <S.Input
            type="text"
            id="categoryDescription"
            name="categoryDescription"
            value={categoryDescription}
            onChange={handleCategoryDescription}
            placeholder="Exemple: Flashcards sur le contraction du muscle"
          />
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
