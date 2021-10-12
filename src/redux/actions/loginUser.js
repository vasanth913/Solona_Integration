import { actionTypes } from "../constants/action-types";

export const loginUser = (username) => 
    async (dispatch) => {
      dispatch({type: actionTypes.LOGGED_IN_USER, payload: username})
    }


export const mintComponentsData = (mintData, mintComponent, mintDataValues) => 
    async (dispatch) => {
      let showData = {};
      console.log('mintDataValues ***', mintData);
      let formData = [];
      showData.id = mintData.componentid; ` `
      showData.description = mintData.description;
      showData.name = mintData.name;
      showData.serielNo = mintData.serielNo;
      formData.push(showData);
      console.log('formData ***', formData[0]);
      localStorage.setItem(mintData.serielNo, JSON.stringify(formData[0]));
      dispatch({type: actionTypes.MINT_COMPONENTS_DATA, payload: [mintData, mintComponent, formData[0]]})
}

export const mintProductComponentsData = (mintProductData, mintAProduct, selectedMintProductId) => 
    async (dispatch) => {
      dispatch({type: actionTypes.MINT_PRODUCTS_DATA, payload: [mintProductData, mintAProduct, selectedMintProductId]})
}

export const burnComponentData = (burnAProduct, selectedBurnComponentId) => 
    async (dispatch) => {
      dispatch({type: actionTypes.BURN_COMPONENT_DATA, payload: [burnAProduct, selectedBurnComponentId]})
}

export const mintComponent = (flag) => 
    async (dispatch) => {
      dispatch({type: actionTypes.MINT_COMPONENT_FLAG, payload: flag})
}

export const mintProduct = (flag) => 
    async (dispatch) => {
      dispatch({type: actionTypes.MINT_PRODUCT_FLAG, payload:flag})
}
export const burnProduct = (flag) => 
    async (dispatch) => {
      dispatch({type: actionTypes.BURN_PRODUCT_FLAG, payload:flag})
}

export const checkboxValue = (value) => 
    async (dispatch) => {
      dispatch({type: actionTypes.CHECK_BOX_VALUE, payload:value})
}

export const mintResponse = (mintResponseData) => 
    async (dispatch) => {
      dispatch({type: actionTypes.MINT_RESPONSE, payload: mintResponseData})
}

export const roleChange = (roleChange) => 
    async (dispatch) => {
      dispatch({type: actionTypes.ROLE_CHANGE, payload: roleChange})
}

