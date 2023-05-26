import { GET_PRODUCT_FEATURED, GET_PRODUCT_FEATURED_FAIL, GET_PRODUCT_FEATURED_SUCCESS } from "../action/getProductFeaturedAction";


const initialState = {
    apiState: "",
    message: "",
    response: {
        featured: []
    }
}

const getProductFeaturedReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_FEATURED:
            return {
                ...state,
                apiState: "loading..."
            }
        case GET_PRODUCT_FEATURED_SUCCESS:
            return {
                ...state,
                apiState: "Success",
                message: "Here is the list of All Featured Products.",
                response: action.response.data.featured,
            }
        case GET_PRODUCT_FEATURED_FAIL:
            return {
                ...state,
                apiState: "Error",
                message: "Something is not right..."
            }
    
        default:
            return state
    }
}

export default getProductFeaturedReducer