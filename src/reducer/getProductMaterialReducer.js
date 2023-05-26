import { GET_PRODUCT_MATERIAL, GET_PRODUCT_MATERIAL_FAIL, GET_PRODUCT_MATERIAL_SUCCESS } from "../action/getProductMaterialAction";


const initialState = {
    apiState: "",
    message: "",
    response: {
        material: []
    }
}

const getProductMaterialReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_MATERIAL:
            return {
                ...state,
                apiState: "loading..."
            }
        case GET_PRODUCT_MATERIAL_SUCCESS:
            return {
                ...state,
                apiState: "Success",
                message: "Here is the list of All Products Material.",
                response: action.response.data.material,
            }
        case GET_PRODUCT_MATERIAL_FAIL:
            return {
                ...state,
                apiState: "Error",
                message: "Something is not right..."
            }
    
        default:
            return state
    }
}

export default getProductMaterialReducer