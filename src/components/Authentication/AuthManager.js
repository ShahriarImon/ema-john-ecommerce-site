import React from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import firebaseConfig from "./firebaseConfig";

export const app = () => initializeApp(firebaseConfig);

export const sigInWithGoogle = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  return signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(result);
      const user = result.user;

      const { email, photoURL, displayName } = result.user;

      const newUser = {
        isSignIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true,
      };

      return newUser;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

// export const signInWithFB = () => {
//   const auth = getAuth();
//   const facebookProvider = new FacebookAuthProvider();

//   return signInWithPopup(auth, facebookProvider)
//     .then((result) => {
//       // The signed-in user info.
//       const user = result.user;
//       user.success = true;
//       console.log("Facebook Auth", result);

//       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//       const credential = FacebookAuthProvider.credentialFromResult(result);
//       const accessToken = credential.accessToken;
//       return user;
//       // ...
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = FacebookAuthProvider.credentialFromError(error);

//       // ...
//     });
// };

// export const signUpWithEmailAndPassword = (name, email, password) => {
//   const auth = getAuth();
//   return createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       // const user = userCredential;
//       console.log(userCredential);
//       const user = userCredential.user;
//       const newUser = {
//         email: user.email,
//         success: true,
//         failure: "",
//       };

//       updateUserName(name);
//       return newUser;
//       // ...
//     })
//     .then((res) => {
//       // const newUser = res.user;
//       // newUser.success = true;
//       // newUser.failure = "";
//       // updateUserName(name);
//       // return newUser;
//     })
//     .catch((error) => {
//       const newUser = {};
//       newUser.failure = error.message;
//       newUser.success = false;
//       // setUser(newUser);
//       // ...
//     });
// };

// export const logInWithEmailAndPassword = (email, password) => {
//   const auth = getAuth();
//   return signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       // console.log(userCredential);
//       const { email, displayName } = userCredential.user;
//       const newUser = {
//         isSignIn: true,
//         name: displayName,
//         email: email,
//       };
//       // const newUser = userCredential.user;
//       // const newUser = user;
//       newUser.success = true;
//       newUser.failure = "";
//       // showUser();
//       console.log(newUser);
//       return newUser;

//       // setLoggedinUser(user);
//       // navigate(location.state.from);
//       // console.log(user);
//       // ...
//     })
//     .then((res) => {
//       // const newUser = { ...user };
//       // newUser.success = true;
//       // newUser.failure = "";
//       // setUser(newUser);
//       // showUser();
//     })
//     .catch((error) => {
//       console.log(error);
//       // const newUser = { ...user };
//       // newUser.failure = error.message;
//       // newUser.success = false;
//       // setUser(newUser);
//     });
// };

export const logOut = () => {
  const auth = getAuth();
  return signOut(auth)
    .then(() => {
      // Sign-out successful.
      const loggedOutUser = {
        isSignIn: false,
        name: "",
        email: "",
        password: "",
        fieldErrorAlert: "",
        success: false,
        failure: "",
      };
      return loggedOutUser;
    })
    .catch((error) => {
      // An error happened.
    });
};

export const showUser = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    // console.log(displayName, email, user.uid);
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }
};

const AuthManager = () => {
  return <div></div>;
};

export default AuthManager;
