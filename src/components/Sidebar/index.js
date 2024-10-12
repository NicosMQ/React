import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            Projects
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            A propos
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Nos prestations
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contact Form
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute href="tel:+16043294094">
            Appelez 604-329-4094
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
