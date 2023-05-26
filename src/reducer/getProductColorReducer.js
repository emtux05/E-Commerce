import { GET_PRODUCT_COLOR, GET_PRODUCT_COLOR_FAIL, GET_PRODUCT_COLOR_SUCCESS } from "../action/getProductColorAction";


const initialState = {
    apiState: "",
    message: "",
    response: {
        colors: []
    }
}

const getProductColorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_COLOR:
            return {
                ...state,
                apiState: "loading..."
            }
        case GET_PRODUCT_COLOR_SUCCESS:
            return {
                ...state,
                apiState: "Success",
                message: "Here is the list of All Products Color.",
                response: action.response.data.colors,
            }
        case GET_PRODUCT_COLOR_FAIL:
            return {
                ...state,
                apiState: "Error",
                message: "Something is not right..."
            }
    
        default:
            return state
    }
}

export default getProductColorReducer