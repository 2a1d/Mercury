import React, {useEffect, useState} from "react";
import '../Signup.css'

function Signup()
{
    const [signupSurvey, setSignupSurvey] = useState({
        firstName:'',
        lastName:'',
        email: '',
        password:''
    });

    function onSubmitForm(e)
    {
        e.preventDefault();
        const temp = {
            firstName: signupSurvey.firstName,
            lastName: signupSurvey.lastName,
            email: signupSurvey.email,
            password: signupSurvey.password
        }
        fetch(
            "http://localhost:4000/Stock",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(temp)
            }
        )
        .then(r=>r.json())
        .then((data)=>{
            window.location.reload();
        })
    }

    function SetText(e)
    {
        setSignupSurvey({
           ...signupSurvey,
           [e.target.name]: e.target.value
        });
    }

    return <div>
        <form className="signupForm" onSubmit={onSubmitForm}>
            <label className="lableContainer">Name:</label>
            <input
                className="inputLable"
                value={signupSurvey.firstName}
                type="text"
                name="firstName"
                onChange={(e)=>SetText(e)}
                default="First Name"
                placeholder="First Name"
            />
            <input
                className="inputLable"
                value={signupSurvey.lastName}
                type="text"
                name="lastName"
                onChange={(e)=>SetText(e)}
                default="Last Name"
                placeholder="Last Name"
            />
            <br/>
            <label className="lableContainer">Email:</label>
            <input
                className="inputLable"
                value={signupSurvey.email}
                type="email"
                name="email"
                onChange={(e)=>SetText(e)}
                placeholder="email"
            />
            <br/>
            <label className="lableContainer">Password:</label>
            <input
                className="inputLable"
                value={signupSurvey.password}
                type="password"
                name="password"
                onChange={(e)=>SetText(e)}
                placeholder="password"
            />
            <br/>
            <button className="signupBtn" type="submit">Sign Up</button>
        </form>
    </div>;
}

export default Signup;