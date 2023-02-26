import styled from "styled-components";

import { v } from "@styles/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
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
    font-size: 1rem;
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
  margin-bottom: 3rem;
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
    font-size: 0.6rem;
    text-align: left;
    padding: 0;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 600px;
  width: 50%;
  height: auto;
  min-height: 400px;
  margin: 0 auto;
  color: #6c747a;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  position: relative;
  border-radius: 2.5rem 0.5rem 2.5rem 0;



  @media ${v.tablet} {
    width: 100%;
    padding: 0;
    margin-top 4rem;
  }
`;

export const CardTitle = styled.h1`
  font-size: 2rem;
  color: #fff;
  width: 100%;
  height: auto;
  overflow-wrap: anywhere;
  margin: 0;
  padding: 1rem 2rem;
  padding-right: 40px;
  text-align: left;
  letter-spacing: 0.1rem;
  font-weight: 700;
  background: rgba(1, 1, 1, 0.4);
  border-radius: 2.5rem 0.5rem 0 0;
  position: relative;
  z-index: 1;
  
  :first-letter {
    text-transform: uppercase;
    }   

  @media ${v.tablet} {
    width: 100%;
    font-size: 1rem;
    padding: 2.5rem 1rem 0 1rem;
  }
`;

export const CardActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  color: #6c747a;
  overflow-x: hidden;
  background: rgba(1, 1, 1, 0.4);
  gap: 0;
  border-radius: 0 0 2.5rem 0.5rem;
  

  button {
    padding: 8px 0;
    border-radius: 0 !important;
  }

  @media ${v.tablet} {
    flex-direction: column;
    width: 100%;

    button {
      padding: 2px 0;
      font-size: 10px;
      padding: 0;
    }
  }
`;

export const CardAnswer = styled.span`
  display: flex;
  flex-direction: row;
  white-space: pre-line;
  justify-content: center;
  position: relative;
  width: 100%;
  max-height: 200px;
  padding: 1rem 2rem;
  overflow-y: auto;
  overflow-wrap: anywhere;
  opacity: 0;
  animation: 250ms ease-in-out fadein forwards;
    @keyframes fadein {
        from {
            opacity: 0;
            left: -20px;
        }
        to {
            opacity: 1;
            left: 0;
        }
    }

    font-size: 1.2rem;

  @media ${v.tablet} {
    font-size: 0.8rem;
    padding: 2rem 1rem;
  }
`;

export const CardQuestionPosition = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  margin: 0 auto;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 1rem;

  @media ${v.tablet} {
    padding: 0.5rem;
    width: 100%;
    font-size: 10px;
    top: 0;
  }
`;

export const CardResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #6c747a;
  overflow-x: hidden;
  background: rgba(1, 1, 1, 0.4);
  gap: 0;
  border-radius: 0 0 0.5rem 0.5rem;
`;

export const CardResultsTitle = styled.h1`
  font-size: 1.2rem;
  color: #fff;
  width: 100%;
  height: auto;
  overflow-wrap: anywhere;
  margin: 0;
  padding: 1rem 2rem;
  text-align: left;
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
    width: 100%;
    font-size: 1rem;
    padding: 2.5rem 1rem 0 1rem;
  }
`;

export const CardResultsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  color: #6c747a;
  overflow-x: hidden;
  background: rgba(1, 1, 1, 0.4);
  gap: 0;
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;

  @media ${v.tablet} {
    font-size: 0.8rem;
    padding: 2rem 1rem;
  }

  @media ${v.mobile} {
    font-size: 0.6rem;
    padding: 2rem 1rem;
  }
`;

export const CardResultsItemTitle = styled.h1`
  font-size: 1.2rem;
  color: ${(props) => props.color ?? "#fff"};
  width: 95%;
  height: auto;
  overflow-wrap: anywhere;
  margin: 0;
  padding: 1rem 2rem;
  text-align: left;
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
    width: 100%;
    font-size: 1rem;
    padding: 2.5rem 1rem 0 1rem;
  }
`;

export const CardResultsItemValue = styled.h1`
  font-size: 1.2rem;
  color: #fff;
  width: 95%;
  height: auto;
  overflow-wrap: anywhere;
  margin: 0;
  padding: 1rem 2rem;
  text-align: left;
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
    width: 100%;
    font-size: 1rem;
    padding: 2.5rem 1rem 0 1rem;
  }
`;
