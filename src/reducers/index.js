import {combineReducers} from 'redux'
import auth from './auth'
import youtubeReducer from "./youtubeReducer";

const reducers = combineReducers({
    auth,
    youtubeReducer
});

export default reducers;