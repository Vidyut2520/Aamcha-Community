import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAwjtZ9xHVOPiaDPpVsHjhWOTJJwjdCn28",
    authDomain: "aamcha-community.firebaseapp.com",
    projectId: "aamcha-community",
    storageBucket: "aamcha-community.appspot.com",
    messagingSenderId: "517315832881",
    appId: "1:517315832881:web:ddc956bfd6c4d09996f910",
    measurementId: "G-6T2EE2DN7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { fireDB, auth, storage };
const analytics = getAnalytics(app);