import styled, { keyframes } from "styled-components";
import { v } from "@styles/variables";

const fadeIn = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`;

export const SSidebar = styled.div`
  display: flex;
  flex-direction: column;
  min-width: ${({ isOpen }) =>
    !isOpen ? v.sidebarClosedWidth : v.sidebarOpenWidth};
  max-width: ${({ isOpen }) =>
    !isOpen ? v.sidebarClosedWidth : v.sidebarOpenWidth};
  height: 100vh;
  padding: ${v.mdSpacing} 0;
  background-color: ${v.sidebarBg};
  position: fixed;
  transition: 250ms;
  box-shadow: 3px -2px 8px 0px #141414;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 10;
`;

export const SLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: auto;
  text-align: center;
  margin: 0 auto;
  height: ${v.sidebarClosedWidth};
  cursor: pointer;
  position: relative;
  transition: 450ms ease-in-out;
  left: ${({ isOpen }) => (!isOpen ? "-100%" : "0")};

  color: #fff;

  h1 {
    font-size: 24px;
    position: ${({ isOpen }) => (!isOpen ? "absolute" : "relative")};
    top: ${({ isOpen }) => (!isOpen ? "-120%" : "0")};
    left: ${({ isOpen }) => (!isOpen ? "-100%" : "0")};
    transition: 0;
  }

  h2 {
    font-style: italic;
    position: relative;
    position: ${({ isOpen }) => (!isOpen ? "absolute" : "relative")};
    top: ${({ isOpen }) => (!isOpen ? "-120%" : "0")};
    left: ${({ isOpen }) => (!isOpen ? "-100%" : "0")};
    transition: 0;
  }

  h3 {
    font-size: 22px;
    position: relative;
    top: 15px;
    position: ${({ isOpen }) => (!isOpen ? "relative" : "absolute")};
    left: ${({ isOpen }) => (!isOpen ? `${v.sidebarClosedWidth}` : "-100%")};
  }
`;

export const SSidebarButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 72px ;
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
  width: 14px;
  height: 14px;
  padding: ${v.mdSpacing};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-right: ${({ isOpen }) => (isOpen ? v.mdSpacing : null)};
  transition: 250ms;
  border: 1px solid ${({ isActive }) => (!isActive ? `transparent` : "#ff7f00")};
  color: ${({ isActive }) => (!isActive ? `` : "#ff7f00")};
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

  color: ${({ isActive }) => (!isActive ? `` : "white")};
`;

export const SLinkNotification = styled.div`
  font-size: 14px;
  padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
  border-radius: calc(${v.borderRadius} / 2);
  background-color: ${({ isActive }) => (!isActive ? `#4a5168` : "#ff7f00")};
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
