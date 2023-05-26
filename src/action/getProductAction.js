export const GET_PRODUCT = 'GET_PRODUCT'
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'
export const GET_PRODUCT_FAIL = 'GET_PRODUCT_FAIL'


export const getProduct = (params) => {
    return {type: GET_PRODUCT, params}
}

export const getProductSuccess = (response) => {
    return {type: GET_PRODUCT_SUCCESS, response}
}

export const getProductFail = (response) => {
    return {type: GET_PRODUCT_FAIL, response }
}