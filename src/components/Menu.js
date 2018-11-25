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

const MenuItem = styled.li`
`;

const menu = props => {
  return (

      <MenuContainer className={props.className}>
        <MenuItem>
          <Link to="/">Paintings</Link>
        </MenuItem>
        {/* <MenuItem>
          <Link to="/projects">Projects</Link>
        </MenuItem> */}
        <MenuItem>
          <Link to="/info">Bio</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">Contact</Link>
        </MenuItem>
      </MenuContainer>
  );
};

export default menu;
