import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import login from './login';
import nav from './nav';
import map from './map'

export default combineReducers({
    login,
    nav,
    form : formReducer,
    map
})