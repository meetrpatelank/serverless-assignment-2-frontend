import React, { useEffect, useState } from "react";
import axios from "axios";
import constants from "../constants/constants";

function Register(){
    const initialValues = {  email: "", password: "", name:"", location:"" };
    const [formValue, setFormValue] = useState(initialValues);
    const REGISTER_API = `${constants.API_BASE_URL_CONTAINER_1}/addUser`;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
      };

      const validateUser = (e) => {
        e.preventDefault();
        const article = {
            "email": formValue.email,
            "password": formValue.password,
            "name": formValue.name,
            "location": formValue.location
        };
        console.log(formValue.email);
        axios.post(REGISTER_API, article)
            .then(response => {
                console.log(response)
                if (response.status == "200") {
                    console.log(response.data.status);
                    window.location.href = "/home";
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
                        <label>Name</label>
                        <input type="text"
                            name="name"
                            value={formValue.name}
                            onChange={handleChange}

                            placeholder="Email" />
                    </div>
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

                    <div className="field">
                        <label>Location</label>
                        <input type="text"
                            name="location"
                            value={formValue.location}
                            onChange={handleChange}

                            placeholder="Location" />
                    </div>

                    <button className="fluid ui button blue">Submit</button>

                </div>
            </form>
        </div>
    )
}
export default Register;