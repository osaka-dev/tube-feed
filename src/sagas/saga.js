import { all } from 'redux-saga/effects';
import authSagas from './auth';
import youtubeSaga from "./youtubeSaga";

export default function* rootSaga() {
	yield all([
		...authSagas,
		...youtubeSaga
	])
}