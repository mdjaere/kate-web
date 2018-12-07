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

const MenuItem = styled.li``;

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    const isOpen = this.state.isOpen;
    const activeLocation = this.props.history.location.pathname;
    console.log(activeLocation);
    return isOpen ? (
      <MenuContainer className={this.props.className}>
        <MenuItem>
        <img height={24} src={"/" + closeX} onClick={this.toggleOpen} />
        </MenuItem>

        <MenuItem>
          <Link to="/paintings">Paintings</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/projects">Projects</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/bio">Bio</Link>
        </MenuItem>
        <MenuItem>
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
