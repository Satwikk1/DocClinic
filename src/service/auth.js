import {firebase, db, auth, storage} from '../config/firebaseConfig'
import {Link, Redirect} from 'react-router-dom';
const socialMediaAuth = (provider, props) => {
    return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res)=>{
        // console.log(res)
        // console.log(res.user)
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('status', true);
        props.setLoginStatus(true);
        return true;
    })
    .catch((err)=>{
        console.log(err);
        return false;
    });
};

export default socialMediaAuth;