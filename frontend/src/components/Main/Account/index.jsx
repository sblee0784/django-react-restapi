import React from "react";
import axiosCUD from "src/utils/axiosCUD";

const Account = () => {
    const config = {
        method: "POST",
        url: 'http://127.0.0.1:8000/account/login/',
        header: {
            'Content-Type': 'application/json'
        }
    };
    const formData = JSON.stringify({
        "email": "hwarang2014@naver.com",
        "password": "1"
    });

    const handleLogin = () => {
        // fetchPost({url, data});
        axiosCUD({config, formData});
    }

    return (
        <React.Fragment>
            <div>
                <span>Account : </span>
                <button onClick={handleLogin}>Login</button>
            </div>
        </React.Fragment>
    )
}

export default Account;