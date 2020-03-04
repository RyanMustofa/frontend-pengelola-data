import React from "react";
import Login from "./component/form-login/login";
import Register from "./component/form-register/Register";
import { Link, Route, Switch } from "react-router-dom";
import Formulir from "./component/formulir/Formulir";
import TambahGuru from "./component/content/TambahGuru";
import Guru from "./component/content/Guru";
import Dashboard from "./component/dashboard/Dashboard";
import Pembayaran from "./component/pembayaran/Pembayaran";
import PembayaranAdd from "./component/pembayaran/PembayaranAdd";
import Detail from './props/detail';
import Detailguru from './props/Detailguru';
import Detailbayar from './props/Detailbayar';
import "./App.css";

const NoLogin = () => {
    return (
        <div>
            <center>
                <div className="kotak">
                    <h1 className="kepala">
                        incorrect
                        <p>You must be regist again </p>
                        <p>
                            <Link className="link" to="/">
                                Login
                            </Link>
                        </p>
                    </h1>
                </div>
            </center>
        </div>
    );
};

class App extends React.Component {
    componentDidMount() {
        const elem = document.getElementById("startingLoader");
        window.onload = () => {
            if (elem) {
                elem.remove();
            }
        };
    }
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/formulir" component={Formulir} />
                <Route path="/addguru" component={TambahGuru} />
                <Route path="/pembayaran" component={Pembayaran} />
                <Route path="/tambah-pembayaran" component={PembayaranAdd} />
                <Route path="/detail/:id" component={Detail} />
                <Route path="/detail-guru/:id" component={Detailguru} />
                <Route path="/detail-bayar/:id" component={Detailbayar} />
                <Route path="/cek" component={NoLogin} />
                <Route component={Guru} path="/guru" />
            </Switch>
        );
    }
}

export default App;
