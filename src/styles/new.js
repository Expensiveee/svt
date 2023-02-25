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

export const Main = styled.main`
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: auto;
  min-width: 800px;
  padding: 1rem;
  margin: 0 auto;

  color: #6c747a;
  background-color: rgb(0, 0, 0, 0.2);
  overflow-x: hidden;
  border-radius: 8px;
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.4);
  }

  @media ${v.tablet} {
    min-width: 100%;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  color: #fff;
  overflow-x: hidden;
  font-weight: 600;
  margin: 0.7rem 0;

  @media ${v.tablet} {
    font-size: 0.8rem;
  }
`;

export const Input = styled.textarea`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  min-width: 100%;
  height: ${(props) => (props.height ? props.height : "auto")}};
  padding: 1rem;
  background-color: #222530;
  color: #fff;
  overflow-x: hidden;
  outline: none;
  border: none;
  margin-bottom: 1.7rem;
  resize: none;

  :placeholder {
    color: #6c747a;
  }

  @media ${v.tablet} {
    font-size: 0.8rem;
  }
`;


export const Select = styled.select`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  min-width: 100%;
  padding: 1rem;
  background-color: #222530;
  color: #fff;
  overflow-x: hidden;
  outline: none;
  border: none;
  margin-bottom: 1.7rem;
`;