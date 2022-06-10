import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from "axios";

function Home() {
    return (

        <div className="Home">
            <h1>
                Welcome to Home Page
            </h1>
            <a href={'/login'}>
                <button>Login</button>
            </a>
            <br>
            </br>
            <br>
            </br>
            <a href={'/register'}>
                <button>Register</button>
            </a>
            <br>
            </br>
            <br>
            </br>
            <a href={'/getonlineusers'}>
                <button>Get Online Users</button>
            </a>

        </div>

    )
}
export default Home;