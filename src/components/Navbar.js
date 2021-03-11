import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { menuData } from '../data/MenuData';

// Styled Components
const Nav = styled.nav`
    height: 60px;
    background: teal;
`;

const Logo = styled(Link)`
    color:#fff;
`;

const MenuBars = styled.i``;

const NavMenu = styled.div``;

const NavMenuLinks = styled(Link)``;

export const Navbar = () => {
    return (
        <Nav>
            {/* Logo  */}
            <Logo to="/">Sungho</Logo>

            <MenuBars/>

            {/* Links being mapped: index.js contains data */}
            <NavMenu>

                {menuData.map((item, index) => {

                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>

                })}

            </NavMenu>
            <h1> test1 </h1>
        </Nav>
    );
};
