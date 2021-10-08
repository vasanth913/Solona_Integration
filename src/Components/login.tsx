import React, {useState} from 'react';
import { useDispatch, useSelector} from "react-redux";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import {loginUser} from '../redux/actions/loginUser';

const Login = () => {

    const [establishConnection, setEstablishConnection] = useState(false);
    

    const [userNameVal, setUserName] = useState("");

    const dispatch = useDispatch();

    let history = useHistory();

    const userName = (event) => {
        setUserName(event.target.value);
    }

    const login = () => {
        dispatch(loginUser(userNameVal));
        history.push("/dashboard");
    }

    return(
        <>
          <div className="auth-wrapper">
            <div className="auth-inner">
            <form>
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Enter Username" value={userNameVal} onChange={(e)=>userName(e)}/>
                    </div>

                    <div className="form-group" style={{marginTop: '10px'}}>
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter Password" />
                    </div>

                <div className="form-group" style={{marginTop: '10px'}}>
                    <Button variant="primary" onClick={login}>Login</Button>
                </div>
                </form>
            </div>
        </div>
        </>
    )

}

export default Login;