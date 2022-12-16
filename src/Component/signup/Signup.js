import React, {useState, useEffect} from "react";


const SignUp = () => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password: '',
        ConfirmPassword: ''
    })

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