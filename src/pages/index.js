import * as S from "@styles/home";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = ({ data }) => {
  const [categories, setCategories] = useState([
    {
      name: "Pas de catégorie de Flashcard",
      description:
        "Crée une catégorie en cliquant sur le bouton du haut à gauche!",
      slug: "/",
    },
  ]);

  useEffect(() => {
    setCategories(data);
  }, [data])

  return (
    <S.Container>
      <S.Title>Bienvenue, bonne révision !</S.Title>
      <S.Actions>
        <Link href={"/new"}>
          <S.Action>
            <S.ActionTitle>Créer une nouvelle catégorie</S.ActionTitle>
            <S.ActionDescription>
              Créez une nouvelle categorie pour organiser de nouvelles
              flashcards.
            </S.ActionDescription>
          </S.Action>
        </Link>
        <Link href={"/add"}>
          <S.Action>
            <S.ActionTitle>
              Ajouter des flashcards à une categorie
            </S.ActionTitle>
            <S.ActionDescription>
              Ajoutez des flashcards à une catégorie existante.
            </S.ActionDescription>
          </S.Action>
        </Link>
      </S.Actions>

      <S.Title>Catégorie de Flashcards</S.Title>
      <S.Actions>
        {categories.map((c, i) => (
          <Link passHref key={i} href={c.slug}>
            <S.Action>
              <S.ActionTitle>{c.name}</S.ActionTitle>
              <S.ActionDescription>
                {c.description ?? "Pas de description"}
              </S.ActionDescription>
            </S.Action>
          </Link>
        ))}
      </S.Actions>
    </S.Container>
  );
};

export async function getServerSideProps() {
  return axios
    .get(`http://localhost:3000/api/categories/all`)
    .then(({ data }) => {
      return {
        props: { data },
      };
    })
    .catch((e) => {
      return {
        notFound: true,
      };
    });
}

export default Home;
