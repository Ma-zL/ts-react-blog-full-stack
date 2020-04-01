import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

interface ILoginParam {
    remember?: boolean;
}

function Login({ remember = false }: ILoginParam) {
    const [username, setUsername] = useState("11111"),
        [password, setPassword] = useState("22222");

    useEffect(() => {
        console.log("component mount");
    }, []);

    useEffect(() => {
        setUsername(username);
    }, [username]);

    useEffect(() => {
        setPassword(password);
    }, [password]);

    return (
        <div>
            <span>{username}</span>
            <span>{password}</span>
            <span>{remember}</span>
        </div>
    );
}

export default Login;
