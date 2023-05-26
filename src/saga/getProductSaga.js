import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_PRODUCT, getProductFail, getProductSuccess } from '../action/getProductAction'
import {getProductApi} from '../api/getProductApi'



export function* getProductSaga (action) {
    try {
        const response = yield call(() => getProductApi(action.params))
        yield put(getProductSuccess(response, action))
    } catch (err) {
        yield put(getProductFail(err.response, action))   
    }
}

export default function* MySaga() {
    yield takeLatest(GET_PRODUCT, getProductSaga)
}