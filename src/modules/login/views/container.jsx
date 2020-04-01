import React from "react";
import { Button } from "antd";
import { systemLogin } from "@api/login";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    async componentDidMount() {
        // const res = await getSettings();
    }

    callLogin = () => {
        systemLogin();
    };

    render() {
        return (
            <div>
                this is login page<Button onClick={this.callLogin}>Login</Button>
            </div>
        );
    }
}

Login.propTypes = {};

Login.defaultProps = {};
export default Login;
