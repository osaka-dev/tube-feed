import firebase from 'firebase/app';
import { config } from './config';

export const firebaseApp = firebase.initializeApp(config);