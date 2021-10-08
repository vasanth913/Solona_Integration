
import React, {useState} from 'react';
import {  useSelector} from "react-redux";
import { Navbar, Container } from 'react-bootstrap';
import Solona from '../Components/images/solona.jpg'; 
import type { RootState } from '../redux/store';
import { PersonCircle } from 'react-bootstrap-icons';
import EstablishConnection from '../Components/establishConnection';

const NavbarComp = () => {

    const userName = useSelector((state: RootState) => state.loginReducer.userNameResponse);

    const mintData = useSelector((state: RootState) => state.mintReducer.mintDataValues);

    return(
      <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand style={{float:'left'}} href="#home">
                <img
                alt=""
                src={Solona}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
            Solona
            </Navbar.Brand>
            {
                userName.length > 0 &&
                <Navbar.Text>
                    <PersonCircle size={30} /> 
                    <span style={{paddingLeft: '10px'}}>{userName}</span>
                    {
                      mintData !== "" && mintData !== undefined && Object.keys(mintData).length ?
                        <EstablishConnection userNameData={userName} mintData={mintData[0]} />
                        : ''
                    }
                </Navbar.Text>
            }
            </Container>
        </Navbar>
        
      </>
    );

 }

 export default NavbarComp;