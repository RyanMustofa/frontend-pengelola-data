import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            token: ""
        };
    }
    changeHandle = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    submitHandle = e => {
        e.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        };
        axios
            .post(
                "http://127.0.0.1:8000/api/login",
                data
            )
            .then(res => {
                localStorage.setItem("api_token", res.data.api_token);
                localStorage.setItem("id", res.data.id);
                console.log(res);
                this.setState({
                    token: res.data.api_token,
                    isiL: false
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({ isiL: true });
            });
    };
    render() {
        if (this.state.isiL === false) {
            return <Redirect to="/dashboard" />;
        } else if (
            localStorage.getItem("api_token") &&
            localStorage.getItem("id")
        ) {
            return <Redirect to="/dashboard" />;
        } else if (this.state.isiL === true) {
            return <Redirect to="/cek" />;
        }

        return (
            <div
                className="container mar"
                style={{
                    width: "50%",
                    padding: "20px",
                    background: "aquamarine",
                    marginTop: "100px"
                }}
            >
                <form onSubmit={this.submitHandle}>
                    <center>
                        <h3>Sign In</h3>
                    </center>

                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            autoComplete="off"
                            className="form-control"
                            placeholder="Enter email"
                            name="email"
                            onChange={this.changeHandle}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            autoComplete="off"
                            className="form-control"
                            placeholder="Enter password"
                            name="password"
                            onChange={this.changeHandle}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Login;
