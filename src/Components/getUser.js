import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import constants from "../constants/constants";


function GetUser() {
    const [getUserList, setGetUserList] = useState([]);
    const GET_USER_API = `${constants.API_BASE_URL_CONTAINER_3}/getOnlineUsers`

    useEffect(() => {
        console.log("in effect");
        axios.get(GET_USER_API).then((res) => {
            if (res && res.data && res.data.response) {

                setGetUserList(res.data.response);
                console.log(res.data.response);
                console.log(Object.values(getUserList).length);
            } else {

            }

        });
    }, []);

    return (
        <div>
            <div>
                <h1>Online Users</h1>
                {
                    getUserList.map((r) => (
                        <div>
                            <div>
                                Name: {r.name}
                            </div>
                            <div>
                                Email: {r.email}
                            </div>
                            <div>
                                Location: {r.location}
                            </div>
                            <div>
                                state: {r.state}
                            </div>
                            <br>
                            </br>
                        </div>

                    ))

                }


            </div>

        </div>

    );

}
export default GetUser;