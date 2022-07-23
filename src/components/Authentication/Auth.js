import { useContext, useState } from "react";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { app, showUser, sigInWithGoogle } from "./AuthManager";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

app();

function Auth() {
  const [freshUser, setFreshUser] = useState(false);
  const [loggedinUser, setLoggedinUser] = useContext(UserContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    password: "",
    fieldErrorAlert: "",
    success: false,
    failure: "",
  });

  // const handleSignOut = () => {
  //   logOut().then((response) => {
  //     setUser(response);
  //     setLoggedinUser(response);
  //   });
  // };

  const handleSignInWithGoogle = () => {
    sigInWithGoogle().then((response) => {
      setUser(response);
      setLoggedinUser(response);
      navigate(location.state.from);
    });
  };

  const handleSignInWithFB = () => {
    const auth = getAuth();
    signInWithPopup(auth, FacebookAuthProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log("Facebook Auth", user);

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };

  const handleBlur = (event) => {
    let isFieldValid = false;

    if (event.target.name == "password") {
      isFieldValid =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/.test(
          event.target.value
        );
    }
    if (event.target.name == "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name == "name") {
      isFieldValid = /^[a-zA-Z\-]+$/.test(event.target.value);
    }
    // if (event.target.name == "name") {
    //   isFieldValid = true;
    // }
    if (isFieldValid) {
      const updateUser = user;
      updateUser[event.target.name] = event.target.value;
      setUser({ ...updateUser });
    }
    if (!isFieldValid) {
      const newUser = { ...user };
      newUser.fieldErrorAlert = event.target.name;
      newUser[event.target.name] = "";
      setUser(newUser);
    }
  };

  const handleCheckbox = () => {
    setFreshUser(!freshUser);
  };

  const handleSubmit = (e) => {
    {
      /* .............................Create Account.............................................
      ................................................................................... */
    }

    if (freshUser && user.email && user.password) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .then((res) => {
          const newUser = { ...user };
          newUser.success = true;
          newUser.failure = "";
          setUser(newUser);
          setLoggedinUser(newUser);
          updateUserName(user.name);
          navigate(location.state.from);
        })
        .catch((error) => {
          const newUser = { ...user };
          newUser.failure = error.message;
          newUser.success = false;
          setUser(newUser);
          // ...
        });
    }
    {
      /* ................................Signin.............................................
      ................................................................................... */
    }

    if (!freshUser && user.email && user.password) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .then((res) => {
          const newUser = { ...user };
          newUser.success = true;
          newUser.failure = "";
          setUser(newUser);
          setLoggedinUser(newUser);
          navigate(location.state.from);
          showUser();
        })
        .catch((error) => {
          console.log(error);
          // const newUser = { ...user };
          // newUser.failure = error.message;
          // newUser.success = false;
          // setUser(newUser);
        });
    }

    // ! ................................updateUserInfo.............................................

    e.preventDefault();
  };
  const updateUserName = (name) => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("Username updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header></Header>
      <div className="App" style={{ textAlign: "center" }}>
        <p>email: {loggedinUser.email}</p>
        {/* <button onClick={handleSignOut}>Sign Out</button> */}
        <button onClick={handleSignInWithGoogle}>Sign in with google</button>
        <button onClick={handleSignInWithFB}>Sign in with facebook</button>
        {user.isSignIn && (
          <div>
            <h1>UserName: {user.name}</h1>
            <h3>Email: {user.email}</h3>
            <img src={user.photo} alt="" />
          </div>
        )}

        <h1>Name: {user.name}</h1>
        <h1>password: {user.password}</h1>
        <h3>Email: {user.email}</h3>
        {/* .............................our own Authentication.............................
      ................................................................................... */}

        <form action="" onSubmit={handleSubmit}>
          <br />
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="SignupForm"
            id=""
          />{" "}
          <span>To create account click the checkbox</span>
          <br />
          <br />
          {freshUser && (
            <input
              type="text"
              onBlur={handleBlur}
              name="name"
              placeholder="Enter your username"
            />
          )}
          <br />
          <input
            onBlur={handleBlur}
            type="text"
            name="email"
            placeholder="Enter your email"
          />
          {user.fieldErrorAlert == "email" && (
            <small style={{ color: "red" }}> *invalid email</small>
          )}
          <br />
          <input
            onBlur={handleBlur}
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          {user.fieldErrorAlert == "password" && (
            <h6 style={{ color: "red" }}>
              *password must have at least one digit and one special character
              and minimum contains 6 character
            </h6>
          )}
          <br />
          <input type="submit" value={freshUser ? "Signup" : "Login"} />
        </form>
        {user.success ? (
          <h3>User {freshUser ? "Created" : "logged in"} Successfully</h3>
        ) : (
          <h3></h3>
        )}
        {user.failure ? <h3>{user.failure}</h3> : <h3></h3>}
      </div>
    </div>
  );
}

export default Auth;
