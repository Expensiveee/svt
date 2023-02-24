import { useState } from "react";
import * as S from "@styles/new";
import Button from "@components/Button";
import { toast } from "react-toastify";
import axios from "axios";

const Add = () => {
  const [recto, setRecto] = useState("");
  const [verso, setVerso] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://svt.expensiveee.me/api/categories/add")
      .then((data) => {
        toast("Flashcard ajouté avec succès");
        setRecto("");
        setVerso("");
      })
      .catch((err) => {
        if (err.response.data.message) return toast(err.response.data.message);
        toast(
          "Une erreur est survenue, veuillez contactez l'administrateur (Ghali qui est moi)"
        );
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

export default Add;
