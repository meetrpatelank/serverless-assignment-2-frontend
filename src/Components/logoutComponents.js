import React, { useEffect, useState } from "react";
import axios from "axios";
import constants from "../constants/constants";

function Logout() {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    const [userDetails, setUserDetails] = useState([]);
    const LOGOUT_API = `${constants.API_BASE_URL_CONTAINER_2}/logoutUser`;
    const GET_USER_API = `${constants.API_BASE_URL_CONTAINER_3}/getuser`;

    useEffect(() => {
        const article = {
            "email": email
        };
        axios.post(GET_USER_API, article).then(response => {
            console.log(response);
            if (response.status == "200") {
                setUserDetails(response.data.response);
            }
        });
    }, []);

    const validateUser = (e) => {
        e.preventDefault();
        const article = {
            "email": email,
            "password": password
        };

        

       


        axios.post(LOGOUT_API, article)
            .then(response => {
                console.log(response)
                if (response.status == "200") {
                    localStorage.clear();
                    console.log(response.data.status);
                    window.location.href = "/home";
                }
            }
            ).catch(function (error) {
                console.log("in catch");
            });

    };

    return (


        <div className="Logout" >
            <div>
                <h1>
                    User Detail
                </h1>
                <div>
                    Name: {userDetails.name}
                </div>
                <div>
                    Email: {userDetails.email}
                </div>
                <div>
                    Location: {userDetails.location}
                </div>
                <div>
                    State: {userDetails.state}
                </div>
            </div>
            <form onSubmit={validateUser}>
                <h1>Logout</h1>
                <button className="fluid ui button blue">Submit</button>

            </form>
        </div>
    )
}

export default Logout;
