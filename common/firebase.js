import firebase from 'firebase/app';
import config from '../config/firebase';

try {
  // 초기화가 되어 있다면
  firebase.app();
} catch (e) {
  // 초기화가 되어 있지 않다면
  firebase.initializeApp(config);
}

export default firebase;
