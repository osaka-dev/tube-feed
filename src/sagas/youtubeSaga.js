import { takeEvery, put , call} from 'redux-saga/effects';
import firebase from 'firebase/app';

function* fetch() {
  const user = firebase.auth().currentUser;
  const {channels} = user ? yield call(fetchChannels, user.uid) : {channels: []};
  if (channels) {
    yield put({type: 'FETCH_SUCCESS', channels})
  }
}

function fetchChannels(user_id) {
  return new Promise(resolve => {
    firebase.firestore().collection('users').doc(user_id).get()
    .then(res => {
      if (res.exists) {
        console.log(res.data().channels)
        resolve({channels: res.data()})
      }
    })
    .catch(error => console.log(error));
  });
}

const youtubeSaga = [
  takeEvery('FETCH_LISTS', fetch),
]
export default youtubeSaga;