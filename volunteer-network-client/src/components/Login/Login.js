import React, { useContext } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider).then((result) => {
            setLoggedInUser(result.user);
            history.replace(from);
        }).catch(function (error) {
            //
        });
    }
    return (
        <div className="text-center account">
            <div>
                <div>
                    <img src="https://i.ibb.co/7r5h4KD/Group-1329.png" className="w-25 mt-3" alt="img" />
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="login-div mt-5 border">
                            <div className="login-btn">
                                <h3 className="mb-3">Login With</h3>
                                <div className="form-control social-btn ml-3 m-2" onClick={handleGoogleSignIn}>
                                    <div className="d-flex">
                                        <div className="text-left mr-5">
                                            <img src="https://i.ibb.co/QcGGmpK/google.png" alt="facebook" className="img img-fluid social-img text-left" />
                                        </div>
                                        <div className="ml-5"> Continue with Google</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;