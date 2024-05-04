import {getAuth, GoogleAuthProvider, signInWithRedirect} from "firebase/auth";
import {app} from "../data-access/firebase/firebase.config"

const provider = new GoogleAuthProvider();


const auth = getAuth(app);
auth.languageCode = 'pl';

const handleRedirect = () => signInWithRedirect(auth, provider);


auth.onAuthStateChanged(event => {
  if (event) {
    console.log(event.email)
    const id = event.uid
    sessionStorage.setItem("userId", id)
    sessionStorage.setItem("loggedIn", "true")
  } else {
    console.error("Something went wrong")
  }
})


export {handleRedirect}
