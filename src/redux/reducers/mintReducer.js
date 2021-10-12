import { actionTypes } from "../constants/action-types";

const inititalState = {
    mintDataValues : [],
    mintResponse: {},
    mintProductDataValues:[],
    burnComponentData: [],
    mintComponentFlag: false,
    mintProductFlag: false,
    burnProductFlag: false
}

export const mintReducer = (state = inititalState, {type, payload}) => {

    switch (type){
        case actionTypes.MINT_COMPONENTS_DATA:
            return {
                ...state, 
                mintDataValues : payload
            };
        case actionTypes.MINT_RESPONSE:
            return {
                ...state, 
                mintResponse : payload
            };
        case actionTypes.MINT_PRODUCTS_DATA:
            return {
                ...state, 
                mintProductDataValues : payload
            };
        case actionTypes.MINT_COMPONENT_FLAG:
            return {
                ...state, 
                mintComponentFlag : payload
            };
        case actionTypes.MINT_PRODUCT_FLAG:
            return {
                ...state, 
                mintProductFlag : payload
            };
        case actionTypes.BURN_PRODUCT_FLAG:
            return {
                ...state, 
                burnProductFlag : payload
            };
        case actionTypes.BURN_COMPONENT_DATA:
            return {
                ...state, 
                burnComponentData : payload
            };
        case actionTypes.CHECK_BOX_VALUE:
            return {
                ...state, 
                checkBoxValue : payload
            };
        default:
            return state;
    }
}