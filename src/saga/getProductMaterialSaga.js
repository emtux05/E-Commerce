import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_PRODUCT_MATERIAL, getProductMaterialFail, getProductMaterialSuccess } from '../action/getProductMaterialAction'
import {getProductMaterialApi} from '../api/getProductMaterialApi'



export function* getProductMaterialSaga (action) {
    try {
        const response = yield call(() => getProductMaterialApi(action.params))
        yield put(getProductMaterialSuccess(response, action))
    } catch (err) {
        console.log("Error in material saga",err)
        yield put(getProductMaterialFail(err.response, action))   
    }
}

export default function* MySaga() {
    yield takeLatest(GET_PRODUCT_MATERIAL, getProductMaterialSaga)
}