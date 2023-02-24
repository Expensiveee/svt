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
import { useRouter } from "next/router";
import Button from "@components/Button";
import axios from "axios";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { asPath } = useRouter();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("/api/categories/all").then(({ data }) => {
      setCategories(data);
    });
  }, []);

  return (
    <SSidebar isOpen={sidebarOpen}>
      <Link href={"/"}>
        <SLogo isOpen={sidebarOpen}>
          <h1>Flashcards d&apos;SVT</h1>
          <h2>Par Ghali</h2>
        </SLogo>
      </Link>
    </SSidebar>
  );
}
