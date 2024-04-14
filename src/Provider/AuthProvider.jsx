import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app)

// create user 
const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};
// sign In
const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}
// sign out 
const logOut = () => {
    return signOut(auth);
}
// Hold user functionality 
useEffect(()=> {
 const unSubscribe =   onAuthStateChanged(auth, currentUser => {
        console.log('hold user', currentUser);
        setUser(currentUser)
    });
    return () => {
        unSubscribe();
    }
}, [])

    const authInfo = {
                 user,
                 createUser,
                 signIn,
                 logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}