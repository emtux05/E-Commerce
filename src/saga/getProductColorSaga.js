import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_PRODUCT_COLOR, getProductColorFail, getProductColorSuccess } from '../action/getProductColorAction'
import {getProductColorApi} from '../api/getProductColorApi'



export function* getProductColorSaga (action) {
    try {
        const response = yield call(() => getProductColorApi(action.params))
        yield put(getProductColorSuccess(response, action))
    } catch (err) {
        yield put(getProductColorFail(err.response, action))   
    }
}

export default function* MySaga() {
    yield takeLatest(GET_PRODUCT_COLOR, getProductColorSaga)
}