export const GET_PRODUCT_MATERIAL = 'GET_PRODUCT_MATERIAL'
export const GET_PRODUCT_MATERIAL_SUCCESS = 'GET_PRODUCT_MATERIAL_SUCCESS'
export const GET_PRODUCT_MATERIAL_FAIL = 'GET_PRODUCT_MATERIAL_FAIL'


export const getProductMaterial = (params) => {
    return {type: GET_PRODUCT_MATERIAL, params}
}

export const getProductMaterialSuccess = (response) => {
    return {type: GET_PRODUCT_MATERIAL_SUCCESS, response}
}

export const getProductMaterialFail = (response) => {
    return {type: GET_PRODUCT_MATERIAL_FAIL, response }
}