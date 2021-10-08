import { actionTypes } from "../constants/action-types";

const inititalState = {
    loginUser : [],
}

export const loginReducer = (state = inititalState, {type, payload}) => {

    switch (type){
        case actionTypes.LOGGED_IN_USER:
            return {
                ...state, 
                userNameResponse: payload
            };
        default:
            return state;
    }
}