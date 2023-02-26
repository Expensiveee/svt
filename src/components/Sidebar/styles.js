import styled, { keyframes } from "styled-components";
import { v } from "@styles/variables";

const fadeIn = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`;

export const SSidebar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${v.navbarHeight};
  justify-content: center;
  padding: ${v.mdSpacing} 0;
  background-color: ${v.sidebarBg};
  transition: 250ms;
  box-shadow: 3px -2px 8px 0px #141414;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 10;

  @media ${v.tablet} {
    justify-content: center;
  }
`;

export const SLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
  transition: 450ms ease-in-out;
  padding: 0 2rem;

  color: #fff;

  h1 {
    font-size: 24px;
    transition: 0;
    padding: 0 12px;
    color: #766ac4;
  }

  h2 {
    font-size: 14px;
    padding: 0 12px;
    color: #fff;
  }

  @media ${v.tablet} {
    h1 {
      font-size: 18px;
    }

    h2{
      font-size: 8px;
    }
  }
`;

export const SSidebarButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 72px;
  left: ${({ isOpen }) =>
    isOpen
      ? `calc(${v.sidebarOpenWidth} - 16px)`
      : `calc(${v.sidebarClosedWidth} - 16px)`};
  border-radius: 50%;
  cursor: pointer;
  transform: rotate(${({ isOpen }) => (!isOpen ? "180deg" : "0deg")});
  transition: 350ms ease-in-out;
  z-index: 999;

  button {
    svg {
      color: white;
    }
  }
`;

export const SDivider = styled.div`
  width: 100%;
  height: 1px;
  margin: ${v.smSpacing} 0;
  background: ${v.dividerBg};
`;

export const SLinkContainer = styled.div`
  transition: 150ms;
  flex: 1;
  padding: 0 ${v.mdSpacing};
  position: relative;
`;

export const SLink = styled.div`
  display: flex;
  flex: 1;
  justify-content: ${({ isOpen }) => (!isOpen ? "center" : "start")};
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 14px;
  padding: calc(${v.smSpacing} - 2px) 0;
  cursor: pointer;
`;

export const SLinkPosition = styled.span`
  display: flex;
  width: 8px;
  height: 8px;
  padding: 10px;
  font-size: 11px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-right: ${({ isOpen }) => (isOpen ? v.smSpacing : null)};
  transition: 250ms;
  border: 1px solid ${({ isActive }) => (!isActive ? `transparent` : "#ff7f00")};
  color: ${({ isActive }) => (!isActive ? `#6c747a` : "#ff7f00")};
  ${SLink}:hover & {
    color: white;
  }
`;

export const SLinkLabel = styled.span`
  display: block;
  flex: 1;
  white-space: nowrap;
  position: relative;
  animation: 450ms ${fadeIn} forwards;
  -user-select: none;
  max-width: 90%;
  overflow: hidden;
  white-space: nowrap; /* Don't forget this one */
  text-overflow: ellipsis;
  text-transform: capitalize;
  font-weight: 700;

  color: ${({ isActive }) => (!isActive ? `#6c747a` : "#8c82d1")};
  ${SLink}:hover & {
    color: white;
  }
`;

export const SLinkNotification = styled.div`
  font-size: 14px;
  padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
  border-radius: calc(${v.borderRadius} / 2);
  background-color: ${({ isActive }) => (!isActive ? `#4a5168` : "#8c82d1")};
  color: ${({ isActive }) => (!isActive ? `#6e758d` : "white")};
  font-size: 12px;
  font-weight: 600;
  margin-right: ${v.mdSpacing};
`;

export const SFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${({ isOpen }) => (!isOpen ? "center" : "space-between")};
  align-items: center;
  margin-top: ${v.lgSpacing};
  position: relative;
  bottom: 0;
  background-color: ${v.sidebarBg};
  transition: 250ms ease-in-out;
  padding: ${({ isOpen }) => (!isOpen ? "0" : `0 ${v.mdSpacing}`)};
`;

export const SFooterAvatar = styled.div`
  position: relative;

  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 3px solid #eaeaea;
  }
`;

export const SFooterUsername = styled.span`
  height: auto;
  margin: auto 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SFooterLogin = styled.div`
  display: flex;

  button {
    text-align: center;
    border-radius: ${({ isOpen }) => (!isOpen ? "50%" : "")};
    width: ${({ isOpen }) => (!isOpen ? "40px" : "100%")};
    height: ${({ isOpen }) => (!isOpen ? "40px" : "auto")};
    padding: ${({ isOpen }) => (!isOpen ? "" : `${v.smSpacing} 20px`)};
    white-space: nowrap;
    text-overflow: ellipsis;

    svg {
      width: 24px;
      height: 24px;
      margin-right: ${({ isOpen, isAuth }) =>
        !isOpen || isAuth ? "0" : v.mdSpacing};
    }
  }
`;

export const SFooterLogout = styled.div`
  width: auto;
  min-height: auto;
  justify-content: center;
  align-items: center;

  svg {
    color: #e93b3b;
  }
`;
