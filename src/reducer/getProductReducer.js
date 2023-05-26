import { GET_PRODUCT, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS } from "../action/getProductAction";


const initialState = {
    apiState: "",
    message: "",
    response: {
        products: []
    }
}

const getProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                apiState: "loading..."
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                apiState: "Success",
                message: "Here is the list of All Products",
                response: action.response.data.products,
            }
        case GET_PRODUCT_FAIL:
            return {
                ...state,
                apiState: "Error",
                message: "Something is not right..."
            }
    
        default:
            return state
    }
}

export default getProductReducer