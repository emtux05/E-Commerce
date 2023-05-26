import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_PRODUCT_FEATURED, getProductFeaturedFail, getProductFeaturedSuccess } from '../action/getProductFeaturedAction'
import {getProductFeaturedApi} from '../api/getProductFeaturedApi'



export function* getProductFeaturedSaga (action) {
    try {
        const response = yield call(() => getProductFeaturedApi(action.params))
        yield put(getProductFeaturedSuccess(response, action))
    } catch (err) {
        yield put(getProductFeaturedFail(err.response, action))   
    }
}

export default function* MySaga() {
    yield takeLatest(GET_PRODUCT_FEATURED, getProductFeaturedSaga)
}