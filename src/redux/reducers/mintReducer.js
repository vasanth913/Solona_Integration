import { actionTypes } from "../constants/action-types";

const inititalState = {
    mintDataValues : {},
    mintResponse: {}
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
        default:
            return state;
    }
}