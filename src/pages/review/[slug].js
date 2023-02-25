import React, { useEffect, useState } from "react";
import * as S from "@styles/reviewStyles";
import Button from "@components/Button";
import Router from "next/router";
import axios from "axios";

const Review = ({ data }) => {
  const [flashcards, setFlashcards] = useState(data?.flashcards);
  const [currentFlashcard, setCurrentFlashcard] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const nextOrPrevious = (direction, origin) => {
    if (direction === "next") {
      if (origin !== "skip" && currentFlashcard + 1 === flashcards.length)
        setShowResults(true);
      if (currentFlashcard + 1 === flashcards.length) return;
      setShowAnswer(false);
      setCurrentFlashcard(currentFlashcard + 1);
    } else {
      if (currentFlashcard === 0) return;
      setShowAnswer(false);
      setCurrentFlashcard(currentFlashcard - 1);
    }
  };

  const handleCorrect = () => {
    setCorrect(correct + 1);
    nextOrPrevious("next");
  };

  const handleWrong = () => {
    setWrong(wrong + 1);
    nextOrPrevious("next");
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  useEffect(() => {
    if(!showResults) return;
    axios.post("https://svt.expensiveee.me/api/updateStatistics", {
      slug: data.meta.slug,
      correct,
      wrong,
    });
  }, [showResults]);

  return (
    <S.Container>
      <S.Title>{data.meta.name}</S.Title>
      <S.Description>{data.meta.description}</S.Description>
      <S.Card>
        {showResults === false ? (
          <>
            <Button
              style={{
                borderRadius: "50%",
                padding: "4px",
                position: "absolute",
                left: "-12px",
                top: "calc(50% - 12px)",
                zIndex: 2,
              }}
              value="<"
              width="20px"
              height="20px"
              theme="primary"
              onClick={() => nextOrPrevious("previous", "skip")}
            />
            <Button
              style={{
                borderRadius: "50%",
                padding: "4px",
                position: "absolute",
                right: "-12px",
                top: "calc(50% - 12px)",
                zIndex: 2,
              }}
              value=">"
              width="20px"
              height="20px"
              theme="primary"
              onClick={() => nextOrPrevious("next", "skip")}
            />
            <S.CardQuestionPosition>
              {currentFlashcard + 1} / {flashcards.length}
            </S.CardQuestionPosition>
            <S.CardTitle>{flashcards[currentFlashcard].recto}</S.CardTitle>
            {showAnswer && (
              <S.CardAnswer>{flashcards[currentFlashcard].verso}</S.CardAnswer>
            )}
            <S.CardActions>
              {!showAnswer && !showResults && (
                <Button
                  width="100%"
                  height="40px"
                  theme="primary"
                  onClick={handleShowAnswer}
                >
                  Voir la réponse
                </Button>
              )}
              {showAnswer && !showResults && (
                <>
                  <Button
                    width="100%"
                    height="40px"
                    theme="secondary"
                    onClick={handleCorrect}
                  >
                    Bonne réponse
                  </Button>
                  <Button
                    width="100%"
                    height="40px"
                    theme="secondary"
                    onClick={handleWrong}
                  >
                    Mauvaise réponse
                  </Button>
                </>
              )}
            </S.CardActions>
          </>
        ): null}

        {showResults && (
          <>
            <S.CardResults>
              <S.CardResultsTitle>Résultats</S.CardResultsTitle>
              <S.CardResultsItem>
                <S.CardResultsItemTitle color={"#32a852"}>
                  Correctes
                </S.CardResultsItemTitle>
                <S.CardResultsItemValue>{correct}</S.CardResultsItemValue>
              </S.CardResultsItem>
              <S.CardResultsItem>
                <S.CardResultsItemTitle color={"#a83232"}>
                  Faux
                </S.CardResultsItemTitle>
                <S.CardResultsItemValue>{wrong}</S.CardResultsItemValue>
              </S.CardResultsItem>
            </S.CardResults>
            <S.CardActions>
              {!showAnswer && !showResults && (
                <Button
                  width="100%"
                  height="40px"
                  theme="primary"
                  onClick={handleShowAnswer}
                >
                  Voir la réponse
                </Button>
              )}
              <>
                <Button
                  width="100%"
                  height="40px"
                  theme="primary"
                  onClick={() => Router.push("/")}
                >
                  Revenir au début
                </Button>
              </>
            </S.CardActions>
          </>
        )}
      </S.Card>
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

export default Review;
