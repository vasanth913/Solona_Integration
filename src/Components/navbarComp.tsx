
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

    const burnComponentData = useSelector((state: RootState) => state.mintReducer.burnComponentData);

    const addAsAChildValue = useSelector((state: RootState) => state.mintReducer.addAsAChildValue);

    const addAsAChildReproduceValue = useSelector((state: RootState) => state.mintReducer.addAsAChildReproduceValue);

    const mintProductProductDataValues = useSelector((state: RootState) => state.mintReducer.mintProductProductDataValues);
    
    console.log('addAsAChildReproduceValue ****', addAsAChildReproduceValue);


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
            CircleBlock
            </Navbar.Brand>
            {
                userName.length > 0 &&
                <Navbar.Text>
                    <PersonCircle size={30} /> 
                    <span style={{paddingLeft: '10px'}}>{userName}</span>
                    {
                      mintData && mintData.length > 0 ?
                        <EstablishConnection mintData={mintData[0]}   />
                        : ''
                    }
                    {
                      mintProductData && mintProductData.length > 0 ?
                        <EstablishConnection  mintData={mintProductData[0]} />
                        : ''
                    }
                    {
                        addAsAChildValue && addAsAChildValue.length > 0 ?
                        <EstablishConnection mintData={addAsAChildValue[1]} />
                        : ''
                    }
                    {
                      burnComponentData && burnComponentData.length > 0 ?
                        <EstablishConnection   mintData={burnComponentData[1]} />
                        : ''
                    }
                    {
                      addAsAChildReproduceValue && addAsAChildReproduceValue.length > 0 ?
                        <EstablishConnection   mintData={addAsAChildReproduceValue[1]} />
                        : ''
                    }
                    {
                    mintProductProductDataValues && mintProductProductDataValues.length > 0 ?
                    <EstablishConnection   mintData={mintProductProductDataValues[0]} />
                    : ''
                    }
                </Navbar.Text>
            }
            </Container>
        </Navbar>
    );

 }

 export default NavbarComp;