import React from "react";
import axios from "axios";
import Navbar from "../component/navbar/Navbar";
import { Link } from "react-router-dom";

class Detailbayar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: []
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios
            .get(`http://127.0.0.1:8000/api/pembayaran/${id}`)
            .then(res => res.data)
            .then(data => {
                this.setState({
                    datas: data
                });
            });
    }
    render() {
        console.log(this.state.datas);
        const { datas } = this.state;
        return (
            <div>
                <Navbar />
                <div
                    style={{
                        fontSize: "20px",
                        color: "white",
                        maxWidth: "70%",
                        margin: "auto",
                        padding: "20px"
                    }}
                >
                    <div class="form-group row">
                        <label
                            for="staticEmail"
                            class="col-sm-2 col-form-label"
                        >
                            nama murid
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                style={{ color: "white" }}
                                readonly
                                class="form-control-plaintext"
                                id="staticEmail"
                                value={datas.nama}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label
                            for="staticEmail"
                            class="col-sm-2 col-form-label"
                        >
                            kelas
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                style={{ color: "white" }}
                                readonly
                                class="form-control-plaintext"
                                id="staticEmail"
                                value={datas.kelas}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label
                            for="staticEmail"
                            class="col-sm-2 col-form-label"
                        >
                            total belum bayar
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                style={{ color: "white" }}
                                readonly
                                class="form-control-plaintext"
                                id="staticEmail"
                                value={datas.jumlah}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label
                            for="staticEmail"
                            class="col-sm-2 col-form-label"
                        >
                            baru bayar
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                style={{ color: "white" }}
                                readonly
                                class="form-control-plaintext"
                                id="staticEmail"
                                value={datas.baru_bayar}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label
                            for="staticEmail"
                            class="col-sm-2 col-form-label"
                        >
                            lunas / belum lunas
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                style={{ color: "white" }}
                                readonly
                                class="form-control-plaintext"
                                id="staticEmail"
                                value={datas.lunas}
                            />
                        </div>
                    </div>
                    <Link to="/pembayaran" className="btn btn-success">kembali</Link>
                </div>
            </div>
        );
    }
}
export default Detailbayar;
