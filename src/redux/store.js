import {combineReducers, createStore, applyMiddleware} from "redux";
import charactersReducer from "./character-reducer";
import thunkMiddleware from "redux-thunk";
import episodesReducer from './episodes-reducer';
import locationReducer from './location-reducer';
import {reducer as formReducer} from "redux-form";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import myWatchListReducer from './myWatchList-reducer';


const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['watchListPage'] // which reducer want to store
  };
  

let reducers = combineReducers({
    characterPage: charactersReducer,
    episodesPage: episodesReducer,
    locationPage: locationReducer,
    watchListPage:myWatchListReducer,
    form: formReducer,
});

const pReducer = persistReducer(persistConfig, reducers);

let store = createStore(pReducer, applyMiddleware(thunkMiddleware));


window.store = store;

const persistor = persistStore(store);

window.persistor = persistor;
export default store;