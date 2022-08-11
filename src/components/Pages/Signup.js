// import React from "react";

// function Signup() {
//     return <form>
//         <label>
//             Name:
//             <input type="text" name="firstName" placeholder="first name"/>
//             <input type="text" name="lastName" placeholder="last name"/>
//         </label>
//         <label>
//             Email:
//             <input type="email" name="email" placeholder="email"/>
//         </label>
//         <label>
//             Password:
//             <input type="password" name="password" placeholder="password"/>
//         </label>
//         <input type="submit" value="Submit"/>
//     </form>
// }

// export default Signup;

import React, {useEffect, useState} from "react";

function Signup()
{
    const [Survey, setSurvey] = useState({
        firstName:'',
        lastName:'',
        email: '',
        password:''
    });

    function onSubmitForm(e)
    {
        e.preventDefault();
        const temp = {
            firstName: Survey.firstName,
            lastName: Survey.lastName,
            email: Survey.email,
            password: Survey.password
        }
        fetch(
            "http://localhost:4000/Travels",
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
        setSurvey({
           ...Survey,
           [e.target.name]: e.target.value
        });
    }

    return <div>
        <form onSubmit={onSubmitForm}>
            <label>Name:</label>
            <input
                value={Survey.firstName}
                type="text"
                name="firstName"
                onChange={(e)=>SetText(e)}
                default="First Name"
                placeholder="First Name"
            />
            <input
                value={Survey.lastName}
                type="text"
                name="lastName"
                onChange={(e)=>SetText(e)}
                default="Last Name"
                placeholder="Last Name"
            />
            <br/>
            <label>Email:</label>
            <input
                value={Survey.email}
                type="email"
                name="email"
                onChange={(e)=>SetText(e)}
                placeholder="email"
            />
            <br/>
            <label>Password:</label>
            <input
                value={Survey.password}
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