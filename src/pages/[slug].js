import { useRouter } from "next/router";
import { useEffect } from "react";
import * as S from "@styles/slugStyles";

const Category = ({ data }) => {
  const router = useRouter();

  return (
    <S.Container>
      <S.Title>{data.meta.name}</S.Title>
      <S.Description>{data.meta.description}</S.Description>
      <S.Statistics>
        <S.Statistic>
          <S.StatisticTitle>Nombre de flashcards</S.StatisticTitle>
          <S.StatisticValue color="#9b32a8">{data.meta.count}</S.StatisticValue>
        </S.Statistic>
        <S.Statistic>
          <S.StatisticTitle>
            Nombre de bonnes réponses précédentes
          </S.StatisticTitle>
          <S.StatisticValue color="#32a852">
            {data.statistics.correct}
          </S.StatisticValue>
        </S.Statistic>
        <S.Statistic>
          <S.StatisticTitle>
            Nombre de mauvaises réponses précédentes
          </S.StatisticTitle>
          <S.StatisticValue color="#a83232">
            {data.statistics.wrong}
          </S.StatisticValue>
        </S.Statistic>
      </S.Statistics>
      <S.Actions>
        <S.Action onClick={() => router.push("review/" + data.meta.slug)}>
          <S.ActionTitle>Commencer à réviser</S.ActionTitle>
          <S.ActionDescription>
            Commencez à réviser les flashcards de cette catégorie.
          </S.ActionDescription>
        </S.Action>
        <S.Action onClick={() => router.push("/add")}>
          <S.ActionTitle>Ajouter des flashcards</S.ActionTitle>
          <S.ActionDescription>
            Ajoutez des flashcards à cette catégorie.
          </S.ActionDescription>
        </S.Action>
      </S.Actions>
    </S.Container>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch("https://svt.expensiveee.me/api/getCategory", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ slug: context.params.slug }),
  });
  const data = await res.json();

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Category;
