import { START_LOGIN,LOGIN_SUCCESS } from '../actions/auth'
import { initialState } from './initialState';

const auth = (state=initialState.auth, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:{
            return {
                ...state,
                isLogin:true,
            }
        }
        default: {
            return state;
        }
    }
};

export default auth;