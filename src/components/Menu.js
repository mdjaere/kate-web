import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

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
          <Link to="/contact">Contact / News</Link>
        </MenuItem>
        <p onClick={props.switchVersion}>copyright 2018</p>
      </MenuContainer>
    </div>
  );
};

export default menu;
