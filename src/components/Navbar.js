import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa';

// Styled Components (CSS)
const Nav = styled.nav`
    display: flex;
    height: 60px;
    justify-content:space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: #004953;
    text-shadow: 1px 1px 3px rgb(0 0 0 / 30%);
 
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

const MenuBars = styled(FaBars)`
display:none;

@media screen and (max-width: 768px){
    display:block;
    height:40px;
    width:40px;
    cursor:pointer;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-50%, 25%);
    color:teal;
}
`;

const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right: -48px;

@media screen and (max-width: 768px){
    display:none;
}
`;

const NavMenuLinks = styled(Link)`
${NavLink}
`;

const NavBtn = styled.div`
display:flex;
align-items:center;
margin-right:24px;


@media screen and (max-width: 768px){
    display:none;
}
`;


export const Navbar = ({toggle}) => {
    return (
        <Nav>
            {/* Logo  */}
            <Logo to="/">Sungho</Logo>

            <MenuBars onClick={toggle}/>

            {/* Links being mapped: index.js contains data */}
            <NavMenu>

                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}

            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>Contact</Button>
            </NavBtn>
        </Nav>
    );
};
