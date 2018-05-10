import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const style = {
  menulist: {
    listStyle: "none",
    padding: 0
  },
  menuitem: {},
  active: {
    fontWeight: "bold"
  }
};

const MenuContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

const MenuItem = styled.li`
  ${props =>
    props.active &&
    css`
      font-weight: bold;
    `};
`;

const menu = props => {
  return (
    <div>
      <MenuContainer>
        <MenuItem active>
          <Link to="/">Main</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/info">Info</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">Contact</Link>
        </MenuItem>
      </MenuContainer>
    </div>
  );
};

export default menu;
