import React from 'react'
import styled, {css} from 'styled-components/macro'
import {Link} from 'react-router-dom'
import { menuData } from '../data/MenuData';

// Styled Components (CSS)
const Nav = styled.nav`
    display: flex;
    height: 60px;
    justify-content:space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: teal;
`;

const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding:0 1rem;
height 100%;
cursor: pointer;
text-decoration:none;
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`;

const MenuBars = styled.i``;

const NavMenu = styled.div`
display:flex;
align-items:center;
`;

const NavMenuLinks = styled(Link)`
${NavLink}
`;


export const Navbar = () => {
    return (
        <Nav>
            {/* Logo  */}
            <Logo to="/">Sungho</Logo>

            <MenuBars/>

            {/* Links being mapped: index.js contains data */}
            <NavMenu>

                {menuData.map((item, index) => (

                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>

    ))}

            </NavMenu>
            <h1>Testing</h1>
        </Nav>
    );
};
