import { combineReducers } from 'redux'

import getProductReducer from './reducer/getProductReducer'
import getProductColorReducer from './reducer/getProductColorReducer';
import getProductMaterialReducer from './reducer/getProductMaterialReducer';
import getProductFeaturedReducer from './reducer/getProductFeaturedReducer';
import cartReducer from './reducer/cartReducer';
import handleButtonSelectionReducer from './reducer/handleButtonSelectionReducer';

const rootReducer = combineReducers({
    products: getProductReducer,
    colors: getProductColorReducer,
    material: getProductMaterialReducer,
    featured: getProductFeaturedReducer,
    cart: cartReducer,
    selectedButton: handleButtonSelectionReducer,
});

export default rootReducer