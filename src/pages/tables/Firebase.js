import * as firebase from 'firebase';


const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAjUyS6ZJLf3UQZ1aMtV5Dn0J4x9LjZRZg",
  authDomain: "https://employee-601f0.firebaseio.com/",
  databaseURL: "https://employee-601f0.firebaseio.com",
  projectId: "employee-601f0",
  storageBucket: "asia-south1",
  messagingSenderId: "556918969910"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;