import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import hamburger from "../assets/Hamburger_icon.svg";
import closeX from "../assets/Close_x.svg";

const MenuContainer = styled.ul`
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

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
    this.isActive = this.isActive.bind(this);
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  isActive(name) {
    const currentLocation = this.props.history.location.pathname;
    const isActive = currentLocation.split("/")[1] === name;
    return isActive;
  }

  render() {
    const isOpen = this.state.isOpen;
    return isOpen ? (
      <MenuContainer className={this.props.className}>
        <img height={24} src={"/" + closeX} onClick={this.toggleOpen} />

        <MenuItem isActive={this.isActive("paintings")}>
          <Link to="/paintings">Paintings</Link>
        </MenuItem>
        <MenuItem isActive={this.isActive("projects")}>
          <Link to="/projects">Projects</Link>
        </MenuItem>
        <MenuItem isActive={this.isActive("bio")}>
          <Link to="/bio">Bio</Link>
        </MenuItem>
        <MenuItem isActive={this.isActive("contact")}>
          <Link to="/contact">Contact</Link>
        </MenuItem>
      </MenuContainer>
    ) : (
      <MenuContainer className={this.props.className}>
        <MenuItem>
          <img height={24} src={"/" + hamburger} onClick={this.toggleOpen} />
        </MenuItem>
      </MenuContainer>
    );
  }
}

export default Menu;
