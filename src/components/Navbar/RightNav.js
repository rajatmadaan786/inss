import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index:9;
  li {
    padding: 18px 20px;
  }
  li a{
    font-size: 14px;
    padding: 0 21px;
  }
  @media (max-width: 1023px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    box-shadow: -1px 3px 5px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 501px) and (min-width: 320px){
    width: 290px;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open} className="navbar-ul">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Register</Link></li>
    </Ul>
  )
}

export default RightNav