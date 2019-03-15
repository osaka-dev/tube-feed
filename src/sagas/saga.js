import { takeEvery } from 'redux-saga/effects'
import { LOGIN } from '../actions/auth'

function* loginInternal(action) {
    yield new Promise(resolve => {
        setTimeout(()=>{
            resolve();
        },3000);
    });
}

export default function* rootSaga() {
    yield takeEvery(LOGIN,loginInternal);
}