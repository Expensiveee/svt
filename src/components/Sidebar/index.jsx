import {
    SSidebar,
    SLogo,
    SDivider,
    SLinkContainer,
    SLink,
    SLinkPosition,
    SLinkLabel,
    SLinkNotification,
    SSidebarButton
  } from "./styles";
  import React, { useState } from "react";
  import Link from "next/link";
  import { useRouter } from "next/router";
  import Button from "@components/Button";
  
  const linkArray = [
    {
      label: "Génétique et Évolution",
      href: "/genetique-et-evolution",
    },
    {
      label: "Corps humain et santé",
      href: "/corps-humain-et-sante"
    }
  ];
  
  const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { asPath } = useRouter();
  
    return (
      <SSidebar isOpen={sidebarOpen}>
        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <Button
            value="<"
            width={"32px"}
            height={"32px"}
            radius={"50%"}
            theme="primary"
          />
        </SSidebarButton>
  
        <SLogo isOpen={sidebarOpen}>
          <h1>Flashcards d&apos;SVT</h1>
          <h2>Par Ghali</h2>
          <h3>SVT</h3>
        </SLogo>
  
        <SDivider />
  
        <SLinkContainer>
          {linkArray.map(({ label, icon, notification, href }, j) => {
            return (
              <>
                <Link href={href}>
                  <SLink
                    isOpen={sidebarOpen}
                    style={!sidebarOpen ? { width: `auto` } : {}}
                  >
                    <SLinkPosition isOpen={sidebarOpen} isActive={asPath == href}>
                      {j + 1}
                    </SLinkPosition>
                    {sidebarOpen && (
                      <>
                        <SLinkLabel isActive={asPath == href}>{label}</SLinkLabel>
                        {!!notification && (
                          <SLinkNotification isActive={asPath == href}>
                            {notification}
                          </SLinkNotification>
                        )}
                      </>
                    )}
                  </SLink>
                </Link>
              </>
            );
          })}
        </SLinkContainer>
      </SSidebar>
    );
  };
  
  export default Sidebar;
  