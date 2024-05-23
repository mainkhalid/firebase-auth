import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4CICs0l8r1ymuO3zce2srpVCLfu8lrYg",
  authDomain: "authentication-2a62d.firebaseapp.com",
  projectId: "authentication-2a62d",
  storageBucket: "authentication-2a62d.appspot.com",
  messagingSenderId: "350105379446",
  appId: "1:350105379446:web:89e47c3ede0c9a3681f557"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Submit button
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Login successful");
        // Redirect or perform further actions
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
});
