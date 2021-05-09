import React, {useContext} from 'react';
import {Context} from '../index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
import { COMPANY_ROUTE } from '../utils/consts';
import {Button} from 'react-bootstrap';

const NavBar = () => {
    const {user} = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
            <NavLink style={{color: 'white'}} to={COMPANY_ROUTE}>КлассАудит</NavLink>
            <Nav className="ml-auto" style={{color: 'white'}}>
                <Button variant={"outline-light"}>Авторизация</Button>
            </Nav>
        </Navbar>
    );
};

export default NavBar;