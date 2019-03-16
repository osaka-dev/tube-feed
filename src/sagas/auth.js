import { takeEvery, put , call} from 'redux-saga/effects';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { START_LOGIN, successLogin} from '../actions/auth';

function* login(action) {
	let provider = new firebase.auth.GoogleAuthProvider();  
	const {isSuccess} = yield call(signInWithPopup,provider);
	if(isSuccess){
		// ログイン成功時、成功アクションを呼ぶ
		// 注意、saga内ではyield put で関数を呼ばないと呼ばれない
		// さらに、yieldは then catch内では使えないので、
		// Promiseを立てて、Resolveの結果で判定している(わざわざ別Funcにする必要はない)
		yield put(successLogin());
	}
}

function signInWithPopup(provider){
	return new Promise(resolve => {
		firebase.auth().signInWithPopup(provider)
			.then(result => {
				//ログイン成功
				console.log("成功");
				resolve({
					isSuccess: true,
				});
			})
			.catch(error => {
				//ログイン失敗
				console.log("失敗",error);
				resolve({
					isSuccess: false,
				});
			});
	});
}


const authSagas = [
    takeEvery(START_LOGIN,login),
]
export default authSagas;