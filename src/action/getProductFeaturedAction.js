export const GET_PRODUCT_FEATURED = 'GET_PRODUCT_FEATURED'
export const GET_PRODUCT_FEATURED_SUCCESS = 'GET_PRODUCT_FEATURED_SUCCESS'
export const GET_PRODUCT_FEATURED_FAIL = 'GET_PRODUCT_FEATURED_FAIL'


export const getProductFeatured = (params) => {
    return {type: GET_PRODUCT_FEATURED, params}
}

export const getProductFeaturedSuccess = (response) => {
    return {type: GET_PRODUCT_FEATURED_SUCCESS, response}
}

export const getProductFeaturedFail = (response) => {
    return {type: GET_PRODUCT_FEATURED_FAIL, response }
}