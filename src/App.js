import app from "./firebase.init";
import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";



const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();


  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);

      })
      .catch(error => {
        console.error(error);
      })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })

      .catch(error => {
        console.error(error);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setUser({});
      })
  }


  return (
    <div className="App">
      {
        user.uid ? <button onClick={handleSignOut}>Sign Out</button>
        :
        <>
          <button onClick={handleGoogleSignIn}>SignIn by Google</button>
          <button onClick={handleGithubSignIn}>SignIn by GitHub</button>
        </>
      }

      <>
        <h1>User's Info....</h1>
        <h2>Name: {user.displayName}</h2>
        <h3>Email: {user.email}</h3>
        <img src={user.photoURL} alt="" />
      </>
    </div>
  );
}

export default App;
