import * as S from "@styles/new";
import Button from "@components/Button";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

const Add = ({ data }) => {
  const [categories, setCategories] = useState(data);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [recto, setRecto] = useState("");
  const [verso, setVerso] = useState("");

  const handleSelectedCategory = (e) => {
    console.log(e.target.value);
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCategory === "") {
      toast("Veuillez sélectionner un chapitre");
      return;
    }

    if (recto === "") {
      toast("Veuillez entrer un recto");
      return;
    }

    if (verso === "") {
      toast("Veuillez entrer un verso");
      return;
    }
    axios
      .post("https://svt.expensiveee.me/api/addFlashcard", {
        slug: selectedCategory,
        flashcard: { recto, verso },
      })
      .then(() => {
        toast("Flashcard ajouté avec succès");
        setRecto("");
        setVerso("");
      })
      .catch((err) => {
        if (err?.response?.data?.error)
          return toast(err?.response?.data?.error ?? "Une erreur est survenue");
      });
  };

  const handleRecto = (e) => {
    setRecto(e.target.value);
  };

  const handleVerso = (e) => {
    setVerso(e.target.value);
  };

  return (
    <S.Container>
      <S.Title>Ajouter une flashcard à une categorie</S.Title>
      <S.Main>
        <S.Form>
          <S.Label htmlFor="categoryName">Chapitre</S.Label>
          <S.Select onChange={handleSelectedCategory}>
            <option value={""}>-----------------</option>
            {categories.map((category, i) => {
              return (
                <option key={i} value={category.meta.slug}>
                  {category.meta.name}
                </option>
              );
            })}
          </S.Select>
          <S.Label htmlFor="flashcardRecto">
            Recto de la flashcard (requis)
          </S.Label>
          <S.Input
            type="text"
            id="flashcardRecto"
            name="flashcardRecto"
            value={recto}
            onChange={handleRecto}
            placeholder="Exemple: Quel neurotransmetteur est responsable de la transmission de l'influx nerveux exitateur?"
          />

          <S.Label htmlFor="flashcardVerso">
            Verso de la flashcard (requis)
          </S.Label>
          <S.Input
            type="text"
            id="flashcardVerso"
            name="flashcardVerso"
            value={verso}
            onChange={handleVerso}
            height="100px"
            placeholder="Exemple: L'acétylcholine"
          />

          <Button
            style={{ marginTop: "2rem" }}
            theme="primary"
            width="220px"
            height="50px"
            onClick={handleSubmit}
          >
            Ajouter
          </Button>
        </S.Form>
      </S.Main>
    </S.Container>
  );
};

export async function getServerSideProps() {
  return axios
    .get("https://svt.expensiveee.me/api/getAllCategories")
    .then(({ data }) => {
      return {
        props: { data },
      };
    })
    .catch((e) => {
      return {
        props: { data: [] },
      };
    });
}

export default Add;
