import { actionTypes } from "../constants/action-types";

export const loginUser = (username) => 
    async (dispatch) => {
      dispatch({type: actionTypes.LOGGED_IN_USER, payload: username})
    }


export const mintComponentsData = (mintData, mintComponent) => 
    async (dispatch) => {
      dispatch({type: actionTypes.MINT_COMPONENTS_DATA, payload: [mintData, mintComponent]})
}


export const mintResponse = (mintResponseData) => 
    async (dispatch) => {
      dispatch({type: actionTypes.MINT_RESPONSE, payload: mintResponseData})
}

