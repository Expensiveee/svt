import * as S from "@styles/home";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Router from "next/router";

const Home = ({ data }) => {
  const [categories, setCategories] = useState([
    {
      meta: {
        name: "Pas de catégorie de Flashcard",
        description:
          "Crée une catégorie en cliquant sur le bouton du haut à gauche!",
        slug: "/",
        count: 999999,
      },
    },
  ]);

  useEffect(() => {
    if(data?.length === 0) return;
    setCategories(data);
  }, [data]);

  return (
    <S.Container>
      <S.Title>Bienvenue, bonne révision !</S.Title>
      <S.Actions>
        <S.Action onClick={() => Router.push("/new")}>
          <S.ActionTitle>Créer une nouvelle catégorie</S.ActionTitle>
          <S.ActionDescription>
            Créez une nouvelle categorie pour organiser de nouvelles flashcards.
          </S.ActionDescription>
        </S.Action>
        <S.Action onClick={() => Router.push("/add")}>
          <S.ActionTitle>Ajouter des flashcards à une categorie</S.ActionTitle>
          <S.ActionDescription>
            Ajoutez des flashcards à une catégorie existante.
          </S.ActionDescription>
        </S.Action>
      </S.Actions>

      <S.Title>Catégories de Flashcards</S.Title>
      <S.Actions>
        {categories.map(({ meta }, i) => (
          <S.Action key={i} onClick={() => Router.push(meta.slug)}>
            <S.ActionCount>{meta.count}</S.ActionCount>
            <S.ActionTitle>{meta.name}</S.ActionTitle>
            <S.ActionDescription>
              {meta.description ?? "Pas de description"}
            </S.ActionDescription>
          </S.Action>
        ))}
      </S.Actions>
    </S.Container>
  );
};

export async function getServerSideProps() {
  return axios
    .get("https://svt.expensiveee.me/api/getAllCategories")
    .then(({ data }) => {
      console.log(data);
      return {
        props: { data },
      };
    })
    .catch((e) => {
      console.log(e);

      return {
        props: { data: [] },
      };
    });
}

export default Home;
