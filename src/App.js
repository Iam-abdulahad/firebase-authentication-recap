import app from "./firebase.init";
import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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

  const handleGithubSignIn =() =>{

  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>SignIn by Google</button>

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
