import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from '@redux-devtools/extension'
import getProductSaga from './saga/getProductSaga'
import getProductColorSaga from './saga/getProductColorSaga'
import getProductMaterialSaga from './saga/getProductMaterialSaga'
import getProductFeaturedSaga from './saga/getProductFeaturedSaga'
import rootReducer from './reducer'

const sagaMiddleware = createSagaMiddleware()

const store = createStore (
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(getProductSaga)
sagaMiddleware.run(getProductColorSaga)
sagaMiddleware.run(getProductMaterialSaga)
sagaMiddleware.run(getProductFeaturedSaga)

export default store