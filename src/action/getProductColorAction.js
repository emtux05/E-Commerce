export const GET_PRODUCT_COLOR = 'GET_PRODUCT_COLOR'
export const GET_PRODUCT_COLOR_SUCCESS = 'GET_PRODUCT_COLOR_SUCCESS'
export const GET_PRODUCT_COLOR_FAIL = 'GET_PRODUCT_COLOR_FAIL'


export const getProductColor = (params) => {
    return {type: GET_PRODUCT_COLOR, params}
}

export const getProductColorSuccess = (response) => {
    return {type: GET_PRODUCT_COLOR_SUCCESS, response}
}

export const getProductColorFail = (response) => {
    return {type: GET_PRODUCT_COLOR_FAIL, response }
}