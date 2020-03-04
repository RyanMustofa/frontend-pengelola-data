import React from "react";
import axios from "axios";
import Navbar from "../component/navbar/Navbar";
import { Link } from 'react-router-dom'

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: []
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios
            .get(`http://127.0.0.1:8000/api/formulir/${id}`)
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
                    style={{ fontSize: "20px", color: "white",maxWidth: "70%",margin:"auto",padding: "20px" }}
                >
                    <div class="form-group row">
                        <label
                            for="staticEmail"
                            class="col-sm-2 col-form-label"
                        >
                            Nama Pendaftar
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                style={{ color: "white" }}
                                readonly
                                class="form-control-plaintext"
                                id="staticEmail"
                                value={datas.nama_pendaftar}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label
                            for="staticEmail"
                            class="col-sm-2 col-form-label"
                        >
                            alamat pendaftar
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                readonly
                                style={{ color: "white" }}
                                class="form-control-plaintext"
                                id="staticEmail"
                                value={datas.alamat_pendaftar}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label
                            for="staticEmail"
                            class="col-sm-2 col-form-label"
                        >
                            tanggal lahir
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                readonly
                                style={{ color: "white" }}
                                class="form-control-plaintext"
                                id="staticEmail"
                                value={datas.tanggal_lahir}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label
                            for="staticEmail"
                            class="col-sm-2 col-form-label"
                        >
                            nama wali
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                readonly
                                style={{ color: "white" }}
                                class="form-control-plaintext"
                                id="staticEmail"
                                value={datas.nama_wali}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label
                            for="staticEmail"
                            class="col-sm-2 col-form-label"
                        >
                            nama ayah
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                readonly
                                style={{ color: "white" }}
                                class="form-control-plaintext"
                                id="staticEmail"
                                value={datas.nama_ayah}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label
                            for="staticEmail"
                            class="col-sm-2 col-form-label"
                        >
                            nama ibu
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                readonly
                                style={{ color: "white" }}
                                class="form-control-plaintext"
                                id="staticEmail"
                                value={datas.nama_ibu}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label
                            for="staticEmail"
                            class="col-sm-2 col-form-label"
                        >
                            status
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                readonly
                                style={{ color: "white" }}
                                class="form-control-plaintext"
                                id="staticEmail"
                                value={datas.status}
                            />
                        </div>
                    </div>

                    <Link to="/" className="btn btn-success">Kembali</Link>

                </div>
            </div>
        );
    }
}

export default Detail;
