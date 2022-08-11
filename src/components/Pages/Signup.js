import React, {useEffect, useState} from "react";

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
        <form onSubmit={onSubmitForm}>
            <label>Name:</label>
            <input
                value={signupSurvey.firstName}
                type="text"
                name="firstName"
                onChange={(e)=>SetText(e)}
                default="First Name"
                placeholder="First Name"
            />
            <input
                value={signupSurvey.lastName}
                type="text"
                name="lastName"
                onChange={(e)=>SetText(e)}
                default="Last Name"
                placeholder="Last Name"
            />
            <br/>
            <label>Email:</label>
            <input
                value={signupSurvey.email}
                type="email"
                name="email"
                onChange={(e)=>SetText(e)}
                placeholder="email"
            />
            <br/>
            <label>Password:</label>
            <input
                value={signupSurvey.password}
                type="password"
                name="password"
                onChange={(e)=>SetText(e)}
                placeholder="password"
            />
            <br/>
            <button type="submit">Sign Up</button>
        </form>
    </div>;
}

export default Signup;