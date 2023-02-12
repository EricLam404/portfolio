/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyDxU7bYftj8GN-vO-qZP4HB6DLGqIruk-U",
  authDomain: "friendlychat-bb4f4.firebaseapp.com",
  projectId: "friendlychat-bb4f4",
  storageBucket: "friendlychat-bb4f4.appspot.com",
  messagingSenderId: "133240994226",
  appId: "1:133240994226:web:593db86e91b0c657dc8cab"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}