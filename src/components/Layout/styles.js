import styled from "styled-components";

import { v } from "../../styles/variables";

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
  z-index: 1;
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: auto;
  min-height: 100vh;
  padding: ${v.smSpacing} ${v.mdSpacing};
  
`;