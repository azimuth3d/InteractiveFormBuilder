import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyAn6RRfMT5GQ2YTNUhu2qhU6utgE0wznJ0',
  authDomain: 'ocreporttool.firebaseapp.com',
  databaseURL: 'https://ocreporttool.firebaseio.com',
  projectId: 'ocreporttool',
  storageBucket: 'ocreporttool.appspot.com',
  messagingSenderId: '159734940296',
};

export default firebase.initializeApp(config);
