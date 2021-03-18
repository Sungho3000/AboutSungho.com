import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { FaTimes } from 'react-icons/fa';
import { Button } from './Button';

const DropdownContainer = styled.div`
position: fixed;
z-index:999;
width: 100%;
height:100%;
background: #004953;
display:grid;
align-items:center;
top:0;
left:0;
transition: 0.3s ease-in-out;
opacity:${({isOpen}) => (isOpen ? '1' : '0')};
top:${({isOpen}) => (isOpen ? '1' : '-100%')};
`;

const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`;
const CloseIcon = styled(FaTimes)`
color: red;
`;
const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows: repeat(4, 80px);
text-align:center;
margin-bottom:4rem;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(4, 60px);

}
`;
const DropdownLink = styled(Link)`
display:flex;
color:#fff;
align-items:center;
justify-content:center;
font-size:1.5rem;
text-decoration:none;
list-style:none;
cursor:pointer;
transition: 0.2s ease-in-out;

&:hover{
    color: black;
}
`;
const BtnWrap = styled.div`
display:flex;
justify-content:center;
`;



const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClic={toggle}>
                <CloseIcon/>
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => (
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                    <BtnWrap>
                        <Button primary="true" round="true" big="true" to="/contact">
                            Contact Me
                        </Button>
                    </BtnWrap>
                </DropdownMenu>
            </DropdownWrapper>
        </DropdownContainer>
    );
};

export default Dropdown