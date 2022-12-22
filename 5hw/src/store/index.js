import {createStore, compose, combineReducers} from 'redux'
import { profileReducer } from './profile/reducer'


const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    profile: profileReducer
})
export const store = createStore(rootReducer, composeEnchancers())