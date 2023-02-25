import styled from "styled-components";
import { v } from "@styles/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #6c747a;
  overflow-x: hidden;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
  animation: 1s ease-in-out 0s 1 normal none running fadein;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media ${v.tablet} {
    font-size: 2rem;
    text-align: left;
    padding: 0;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  width: 100%;
  color: #6c747a;
  margin: 0 auto;
  padding: 0 1rem;
  text-transform: capitalize;
  font-weight: 700;
  position: relative;
  z-index: 1;
  animation: 1s ease-in-out 0s 1 normal none running fadein;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media ${v.tablet} {
    font-size: 1rem;
    text-align: left;
    padding: 0;
  }
`;

export const Flashcards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
  color: #6c747a;
  overflow-x: hidden;
  margin-top: 2rem;

  @media ${v.tablet} {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const Flashcard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
  color: #6c747a;
  overflow-x: hidden;
  margin-top: 2rem;

  @media ${v.tablet} {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const FlashcardTitle = styled.h1`
  font-size: 2rem;
  color: #fff;
  text-align: center;
  margin: 0 auto;
  padding: 1rem;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
  animation: 1s ease-in-out 0s 1 normal none running fadein;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media ${v.tablet} {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const FlashcardDescription = styled.p`
  font-size: 1.2rem;
  color: #fff;
  text-align: center;
  margin: 0 auto;
  padding: 1rem;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
  animation: 1s ease-in-out 0s 1 normal none running fadein;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media ${v.tablet} {
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const FlashcardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
  color: #6c747a;
  overflow-x: hidden;
  margin-top: 2rem;
  background-color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #6c747a;
    color: #fff;
  }

  @media ${v.tablet} {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const FlashcardRecto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
  color: #6c747a;
  overflow-x: hidden;
  margin-top: 2rem;

  @media ${v.tablet} {
    width: 100%;
    margin-top: 1rem;
  }

  @media ${v.mobileL} {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const FlashcardVerso = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
  color: #6c747a;
  overflow-x: hidden;
  margin-top: 2rem;

  @media ${v.tablet} {
    width: 100%;
    margin-top: 1rem;
  }

  @media ${v.mobileL} {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const Statistics = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  color: #6c747a;
  overflow-x: hidden;
  margin-top: 2rem;

  @media ${v.tablet} {
    width: 100%;
    margin-top: 1rem;
    flex-wrap: wrap;
  }

  @media ${v.mobileL} {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const Statistic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  color: #6c747a;
  overflow-x: hidden;
  margin-top: 2rem;

  @media ${v.tablet} {
    width: 100%;
    margin-top: 1rem;
  }

  @media ${v.mobileL} {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const StatisticTitle = styled.h1`
  font-size: 0.8rem;
  color: #eaeaea;
  text-align: center;
  margin: 0 auto;
  font-weight: 600;
  position: relative;
  z-index: 1;
  animation: 1s ease-in-out 0s 1 normal none running fadein;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media ${v.tablet} {
    width: 100%;
    font-size: 18px;
    text-align: left;
  }
`;

export const StatisticValue = styled.h1`
  font-size: 4rem;
  color: ${(props) => props.color ?? "#fff"};
  text-align: center;
  margin: 0 auto;
  padding: 1rem;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  font-weight: 700;
  position: relative;

  @media ${v.tablet} {
    font-size: 1.5rem;
    text-align: center;
  }

  @media ${v.mobileL} {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Action = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: calc(100% / 2 - 1rem);
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
  min-height: 220px;
  background-color: rgba(0, 0, 0, 0.2);
  color: #6c747a;
  letter-spacing: 0.6px;
  overflow-x: hidden;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;

  :hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    min-height: 200px;
  }
`;

export const ActionTitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
  margin: 0 auto;
  padding: 1rem;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  font-weight: 800;
  position: relative;
  z-index: 1;
  animation: 1s ease-in-out 0s 1 normal none running fadein;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media ${v.tablet} {
    width: 100%;
    font-size: 18px;
  }
`;

export const ActionDescription = styled.p`
  font-size: 1rem;
  color: #6c747a;
  text-align: center;
  margin: 0 auto;
  text-transform: capitalize;
  font-weight: 300;
  position: relative;
  z-index: 1;
  animation: 1s ease-in-out 0s 1 normal none running fadein;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media ${v.tablet} {
    width: 100%;
    font-size: 16px;
  }
`;
