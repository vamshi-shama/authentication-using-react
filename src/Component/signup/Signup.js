import React, {useState, useEffect} from "react";
// import { useHistory } from "react-router-dom";
import './Signup.css';
import Profile from '/home/rvc/Music/github/authentication-using-react/src/Component/profile/Profile';


const SignUp = () => {
    // let history = useHistory();
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password: '',
        ConfirmPassword: ''
    })

    const [error, setError] = useState({
        name: false,
        email: false,
        password: false,
        ConfirmPassword: false
    })

    const [submit, setSubmit] = useState(false)
    const [success, setSuccess] = useState(false)

    const action = () =>{
        <Profile />
    }
    return(
       <div className="main">
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
            </form>
            <form>
                <label>
                    Email:
                    <input type="text" name="email" />
                </label>
            </form>
            <form>
                <label>
                    Password:
                    <input type="text" name="password" />
                </label>
            </form>
            <form>
                <label>
                    Confirmpassword:
                    <input type="text" name="confirmpassword" />
                </label>
            </form>
            <form>
                <button onClick={action}>SignUp</button>
            </form>
       </div>
    );
}

export default SignUp;