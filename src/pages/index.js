import * as S from "@styles/home";
import axios from "axios";
import { useEffect, useState } from "react";
import Router from "next/router";

const Count = () => {
  const bac = new Date(1679342064000);
  const now = new Date();
  const diff = bac - now;
  const [days, setDays] = useState(Math.floor(diff / (1000 * 60 * 60 * 24)));
  const [hours, setHours] = useState(Math.floor((diff / (1000 * 60 * 60)) % 24));

  useEffect(() => {
    const interval = setInterval(() => {
      const bac = new Date(1679342064000);
      const now = new Date();
      const diff = bac - now;
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((diff / (1000 * 60 * 60)) % 24));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
    

  return (
    <>
      {days} jours et {hours} heures
    </>
  );
};

const Home = ({ data }) => {
  const [categories, setCategories] = useState([
    {
      meta: {
        name: "Pas de chapitre à réviser:/",
        description:
          "Crée un deck de flashcards en cliquant sur le bouton du haut à gauche!",
        slug: "/",
        count: 999999,
      },
    },
  ]);

  useEffect(() => {
    if (data?.length === 0) return;
    setCategories([
      {
        meta: {
          name: "Toutes les flashcards de tout les chapitres",
          description: "Tout les chapitres réunis en un seul !",
          slug: "/all",
          count: 999999,
        },
      },
      ...data,
    ]);
  }, [data]);

  return (
    <S.Container>
      <S.Title>
        <h1>
          Plus que{" "}
          <span>
            <Count />
          </span>{" "}
          avant le <span>Jour J</span>. Bonne chance !
        </h1>
      </S.Title>
      <S.Actions>
        <S.Action onClick={() => Router.push("/new")}>
          <S.ActionTitle>Créer un paquet</S.ActionTitle>
          <S.ActionDescription>
            Créez un paquet de flashcards pour réviser un chapitre.
          </S.ActionDescription>
        </S.Action>
        <S.Action onClick={() => Router.push("/add")}>
          <S.ActionTitle>Ajouter une flashcard</S.ActionTitle>
          <S.ActionDescription>
            Ajoutez des flashcards à un chapitre.
          </S.ActionDescription>
        </S.Action>
      </S.Actions>

      <S.Title>
        <h1>Chapitres</h1>
      </S.Title>
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
