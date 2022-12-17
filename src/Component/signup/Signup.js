import React, {useState, useEffect} from "react";


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
       <div>
            <div>Name</div>
            <div>Email</div>
            <div>Password</div>
            <div>ConfirmPassword</div>
       </div>
    );
}

export default SignUp;