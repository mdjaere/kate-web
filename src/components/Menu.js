import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const MenuContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1em;
`;

const MenuItem = styled.li``;

class Menu extends React.Component {
  constructor() {
    super();
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
    return isOpen ? (
      <MenuContainer className={this.props.className}>
        <MenuItem>
          <div onClick={this.toggleOpen}>Close</div>
        </MenuItem>
        <MenuItem>
          <Link to="/">Paintings</Link>
        </MenuItem>
        <MenuItem>
        <Link to="/projects">Projects</Link>
      </MenuItem>
        <MenuItem>
          <Link to="/info">Bio</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">Contact</Link>
        </MenuItem>
      </MenuContainer>
    ) : (
      <MenuContainer className={this.props.className}>
        <MenuItem>
          <div onClick={this.toggleOpen}>Menu</div>
        </MenuItem>
      </MenuContainer>
    );
  }
}

export default Menu;
