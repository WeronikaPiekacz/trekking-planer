import {initializeApp} from "firebase/app";
import {environment} from "../../../environments/environment";

const firebaseConfig = {
  apiKey: environment.apiKey,
  authDomain: environment.authDomain,
  projectId: environment.projectId,
  storageBucket: environment.storageBucket,
  messagingSenderId: environment.messagingSenderId,
  appId: environment.appId,
  measurementId: environment.measurementId
};

const app = initializeApp(firebaseConfig);

export {app}
