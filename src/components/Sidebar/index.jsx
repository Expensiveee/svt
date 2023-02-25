import {
  SSidebar,
  SLogo,
  SDivider,
  SLinkContainer,
  SLink,
  SLinkPosition,
  SLinkLabel,
  SLinkNotification,
  SSidebarButton,
} from "./styles";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <SSidebar>
      <Link href={"/"}>
        <SLogo>
          <h1>Flashcards d&apos;SVT</h1>
          <h2>Powered by Ghali</h2>
        </SLogo>
      </Link>
    </SSidebar>
  );
}
