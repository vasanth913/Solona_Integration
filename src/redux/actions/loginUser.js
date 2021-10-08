import { actionTypes } from "../constants/action-types";

export const loginUser = (username) => 
    async (dispatch) => {
      dispatch({type: actionTypes.LOGGED_IN_USER, payload: username})
    }
