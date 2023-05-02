import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import hamburger from "../assets/Hamburger_icon.svg";
import closeX from "../assets/Close_x.svg";
import { useLocation } from "react-router-dom";

const MenuContainer = styled.ul`
  a:link {
    text-decoration: none;
    color: #666;
  }
  a:active {
    text-decoration: none;
    color: #666;
  }
  a:visited {
    text-decoration: none;
    color: #666;
  }
  a:hover {
    text-decoration: underline;
    color: #666;
  }
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1em;
  cursor: pointer;
`;

const MenuItem = styled.li`
  ${props =>
    props.isActive &&
    css`
      text-decoration: underline;
    `}
`;

function Menu(props) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  function isActive(name) {
    const currentLocation = location.pathname;
    const isActive = currentLocation.split("/")[1] === name;
    return isActive;
  }

  return isOpen ? (
    <MenuContainer className={props.className}>
      <img height={24} src={closeX} onClick={toggleOpen} alt="Close menu icon" />

      <MenuItem isActive={isActive("work")}>
        <Link to="/work">Work</Link>
      </MenuItem>
      <MenuItem isActive={isActive("projects")}>
        <Link to="/projects">Projects</Link>
      </MenuItem>
      <MenuItem isActive={isActive("bio")}>
        <Link to="/bio">Bio</Link>
      </MenuItem>
      <MenuItem isActive={isActive("contact")}>
        <Link to="/contact">Contact</Link>
      </MenuItem>
    </MenuContainer>
  ) : (
    <MenuContainer className={props.className}>
      <MenuItem>
        <img height={24} src={hamburger} onClick={toggleOpen} alt="Open menu icon" />
      </MenuItem>
    </MenuContainer>
  );
}

export default Menu;
