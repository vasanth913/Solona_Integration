
import React, {useState, useEffect} from 'react';
import {  useSelector} from "react-redux";
import { Navbar, Container } from 'react-bootstrap';
import CircularBlock from '../Components/images/circularBlock.jpg';
import type { RootState } from '../redux/store';
import { PersonCircle } from 'react-bootstrap-icons';
import EstablishConnection from '../Components/establishConnection';

const NavbarComp = () => {


    const userName = useSelector((state: RootState) => state.loginReducer.userNameResponse);

    const mintData = useSelector((state: RootState) => state.mintReducer.mintDataValues);

    const mintProductData = useSelector((state: RootState) => state.mintReducer.mintProductDataValues);

    const mintComponentFlag = useSelector((state: RootState) => state.mintReducer.mintComponentFlag);

    const mintProductFlag = useSelector((state: RootState) => state.mintReducer.mintProductFlag);

    const burnProductFlag = useSelector((state: RootState) => state.mintReducer.burnProductFlag);

    console.log('mintProductData ***', mintData);

    

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand  href="#home">
                <img
                alt=""
                src={CircularBlock}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
            Circular Block
            </Navbar.Brand>
            {
                userName.length > 0 &&
                <Navbar.Text>
                    <PersonCircle size={30} /> 
                    <span style={{paddingLeft: '10px'}}>{userName}</span>
                    {
                      mintData && mintData.length > 0 && mintProductData.length === 0 ?
                        <EstablishConnection userNameData={userName} mintData={mintData[0]} />
                        : ''
                    }
                    {
                      mintProductData && mintProductData.length > 0 ?
                        <EstablishConnection userNameData={userName}  mintData={mintData[0]} />
                        : ''
                    }
                    {/* {
                      burnProductFlag ?
                        <EstablishConnection userNameData={userName}  mintData={mintData[0]} />
                        : ''
                    } */}
                </Navbar.Text>
            }
            </Container>
        </Navbar>
    );

 }

 export default NavbarComp;