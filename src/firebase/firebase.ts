
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD11Q5Kd6IdD2sLVo2VB2KzpFAw_ODyyZg",
  authDomain:"nuvio-834de.firebaseapp.com",
  projectId: "nuvio-834de",
  storageBucket: "nuvio-834de.firebasestorage.app",
  appId: "1:144577635033:web:a917571acb5a62a85114c8",
   measurementId: "G-D5WKST6H4P"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
