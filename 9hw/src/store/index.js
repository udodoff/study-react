import {createStore, compose, combineReducers, applyMiddleware} from 'redux'
import { profileReducer } from './profile/reducer'
import { messageReducer } from './messages/reducer';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
}

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messageReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeEnchancers(applyMiddleware(thunk)))

export const persistor = persistStore(store)