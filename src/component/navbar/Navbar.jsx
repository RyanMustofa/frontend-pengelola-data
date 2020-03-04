import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: false
        };
    }
    handleLogout = () => {
        localStorage.removeItem("api_token");
        localStorage.removeItem("id");
        this.setState({ valid: true });
    };
    render() {
        if (localStorage.getItem("api_token") === null) {
            return <Redirect to="/" />;
        } else if (this.state.valid === true) {
            return <Redirect to="/" />;
        }
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="fix">
                <a class="navbar-brand">SDN LEMAHBANG</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/guru">
                                guru
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/pembayaran">
                                pembayaran
                            </Link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <button
                            class="btn btn-outline-success my-2 my-sm-0"
                            onClick={this.handleLogout}
                        >
                            Logout
                        </button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Navbar;
