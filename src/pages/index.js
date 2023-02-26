import * as S from "@styles/home";
import axios from "axios";
import { useEffect, useState } from "react";
import Router from "next/router";

const Count = () => {
  const bac = new Date(1679342064000);
  const now = new Date();
  const diff = bac - now;
  const [days, setDays] = useState(Math.floor(diff / (1000 * 60 * 60 * 24)));
  const [hours, setHours] = useState(
    Math.floor((diff / (1000 * 60 * 60)) % 24)
  );
  const [minutes, setMinutes] = useState(Math.floor((diff / 1000 / 60) % 60));
  const [seconds, setSeconds] = useState(Math.floor((diff / 1000) % 60));

  useEffect(() => {
    const interval = setInterval(() => {
      const bac = new Date(1679342064000);
      const now = new Date();
      const diff = bac - now;
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((diff / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((diff / 1000 / 60) % 60));
      setSeconds(Math.floor((diff / 1000) % 60));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {days} jours, {hours} heures {minutes} minutes et {seconds} secondes
    </>
  );
};

const Home = ({ data }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (data?.length === 0) return;
    setCategories(data);
  }, [data]);

  return (
    <S.Container>
      <S.Title>
        <h1>
          Plus que{" "}
          <span>
            <Count />
          </span>{" "}
          avant le <span>Jour J</span>.
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
            Ajoutez une flashcards à un chapitre.
          </S.ActionDescription>
        </S.Action>
      </S.Actions>

      <S.HeroTitle>Chapitres</S.HeroTitle>
      <S.Actions>
        <S.Action
          style={{ border: "2px dashed #766ac4", maxWidth: "100%" }}
          onClick={() => Router.push("/all")}
        >
          <S.ActionCount>999</S.ActionCount>
          <S.ActionTitle>
            Toutes les flashcards de tout les chapitres
          </S.ActionTitle>
          <S.ActionDescription>
            Tout les chapitres réunis en un seul !
          </S.ActionDescription>
        </S.Action>
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
