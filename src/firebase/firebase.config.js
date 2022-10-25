// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8xUQrgO4JrkU9o0-p9NJKNeDHgIeECFU",
  authDomain: "praxis-larning.firebaseapp.com",
  projectId: "praxis-larning",
  storageBucket: "praxis-larning.appspot.com",
  messagingSenderId: "1013617993899",
  appId: "1:1013617993899:web:3c66077820422375d02fee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;