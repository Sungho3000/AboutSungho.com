import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
background: ${({ primary }) =>(primary ? 'teal' : 
'CD853f')};
white-space: nowrap;
outline:none;
border:none;
min-width:100px;
max-width:200px;
cursor:pointer;
text-decorations:none;
transition:0.3s;
display:flex;
justify-content:center;
align-items:center;
padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
color: ${({primary}) => (primary ? '#fff' : '#000d1a')};
font-size: ${({big}) => (big ? '20px' : '14px')};
text-decoration:none;

border-radius: 2px;
text-shadow: 1px 1px 3px rgb(0 0 0 / 30%);
box-shadow: 2px 2px 0 0 rgb(0 0 0 / 30%), inset 0 -3px 0 0 rgb(0 0 0 / 25%);
border: 1px solid rgba(0,0,0,.3);

&:hover{
    transform: translateY(-2px);
}


`;

