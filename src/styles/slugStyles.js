import styled from "styled-components";
import { v } from "@styles/variables";

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #222530;
  color: #6c747a;
  overflow-x: hidden;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
  text-align: left;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 1rem;
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

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0;
    text-align: left;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;

  background-color: #222530;
  color: #6c747a;
  overflow-x: hidden;

  @media (max-width: 768px) {
    width: 100%;
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
    padding: 0;
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
    min-height: 250px;
    padding: .5rem;
  }
`;

export const ActionTitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
  margin: 0 auto;
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
  @media ${v.mobileL} {
    width: 100%;
    font-size: 20px;
    padding: 0;
  }
`;

export const ActionDescription = styled.p`
  font-size: 1rem;
  color: #6c747a;
  text-align: center;
  margin: 0 auto;
  padding: .5rem;
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

  @media ${v.mobileL} {
    width: 100%;
    font-size: 12px;
  }
`;

export const ActionCount = styled.p`
  font-size: 1rem;
  color: #fff;
  text-align: center;
  margin: 0 auto;
  padding: 8px;
  text-transform: capitalize;
  font-weight: 300;
  position: relative;
  z-index: 1;
  animation: 1s ease-in-out 0s 1 normal none running fadein;
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);

  ${Action}:hover & {
    background-color: #766ac4;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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
