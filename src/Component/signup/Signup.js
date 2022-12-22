import React, {useState, useEffect} from "react";
import './Signup.css';


const SignUp = () => {
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
                <a href="../../Components/profile/Profile.js">
                    <button>SignUp</button>
                </a>
            </form>
       </div>
    );
}

export default SignUp;