import React from "react";
import axios from "axios";
import Navbar from "../component/navbar/Navbar";
import { Link } from 'react-router-dom'

class Detailguru extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: []
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios
            .get(`http://127.0.0.1:8000/api/guru/${id}`)
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
                            Nama Guru
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                style={{ color: "white" }}
                                readonly
                                class="form-control-plaintext"
                                id="staticEmail"
                                value={datas.nama_guru}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label
                            for="staticEmail"
                            class="col-sm-2 col-form-label"
                        >
                            mengampu
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                readonly
                                style={{ color: "white" }}
                                class="form-control-plaintext"
                                id="staticEmail"
                                value={datas.mengampu}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label
                            for="staticEmail"
                            class="col-sm-2 col-form-label"
                        >
                            deskripsi guru
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                readonly
                                style={{ color: "white" }}
                                class="form-control-plaintext"
                                id="staticEmail"
                                value={datas.deskripsi_guru}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label
                            for="staticEmail"
                            class="col-sm-2 col-form-label"
                        >
                            alamat guru
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                readonly
                                style={{ color: "white" }}
                                class="form-control-plaintext"
                                id="staticEmail"
                                value={datas.alamat_guru}
                            />
                        </div>
                    </div>

                    <Link to="/guru" className="btn btn-success">Kembali</Link>

                </div>
            </div>
        );
    }
}

export default Detailguru;
