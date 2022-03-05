const admin = require("firebase-admin");
const {initializeApp} = require("firebase/app");
const {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithCredential
} = require("firebase/auth");

const googleProvider = new GoogleAuthProvider();
const serviceAccount = require("../../resources/serviceAccountKey.json");
const firebaseConfig = require("../../resources/firebaseConfig.json");


const app = initializeApp(firebaseConfig);


const auth = getAuth();


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const database = admin.firestore();

const loginWithGoogle = async (id_token) => {
    try {
        const credential = GoogleAuthProvider.credential(id_token);
        const auth = getAuth();
        signInWithCredential(auth, credential).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    } catch {
    }
}

const createUser = async (name, surname, photoURL, email, password) => {
    try {
        const result = await admin.auth().createUser({
            email: email, emailVerified: false, password: password, displayName: name + " " + surname, disabled: false,
        })
        // console.log(result)
        // return result;
        return {success: true};
    } catch (error) {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.error(error)
        return {success: false};
    }
}

const checkLogin = async (email, password) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        const user = result.user;
        console.log(user);
        return true;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error)
    }
    return false;
}


module.exports = {
    createUser, checkLogin
}
