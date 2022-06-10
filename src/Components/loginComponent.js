import React, { useEffect, useState } from "react";
import axios from "axios";
import constants from "../constants/constants";

function Login() {

    const initialValues = { email: "", password: "" };
    const [formValue, setFormValue] = useState(initialValues);
    const LOGIN_API = `${constants.API_BASE_URL_CONTAINER_2}/loginValidate`;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    const validateUser = (e) => {
        e.preventDefault();
        const article = {
            "email": formValue.email,
            "password": formValue.password
        };
        console.log(formValue.email);
        axios.post(LOGIN_API, article)
            .then(response => {
                console.log(response)
                if (response.status == "200") {
                    localStorage.setItem("email",formValue.email);
                    localStorage.setItem("password",formValue.password);
                    console.log(response.data.status);
                    window.location.href = "/logout";
                }
                else{
                    window.alert("Email or Password is Wrong");
                }
            }
            ).catch(function (error) {
                console.log("in catch");
            });

    };

    return (

        <div className="Login" >
            <form onSubmit={validateUser}

            >
                <h1>Login</h1>
                <div className="ui divider"></div>
                <div className="ui form">

                
                    <div className="field">
                        <label>Email</label>
                        <input type="email"
                            name="email"
                            value={formValue.email}
                            onChange={handleChange}

                            placeholder="Email" />
                    </div>

                    <div className="field">
                        <label>Password</label>
                        <input type="password"
                            name="password"
                            value={formValue.password}
                            onChange={handleChange}

                            placeholder="Password" />
                    </div>

                    <button className="fluid ui button blue">Submit</button>

                </div>
            </form>
        </div>
    )
}
export default Login;
