import React, { Component } from "react";
import { Button, Form, Col } from "react-bootstrap";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import "./formulir.css";

class Formulir extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama_pendaftar: "",
            alamat_pendaftar: "",
            tanggal_lahir: "",
            nama_wali: "",
            user_id: localStorage.getItem("id"),
            nama_ayah: "",
            nama_ibu: "",
            status: ""
        };
    }

    changeHandle = e => {
        this.setState(
            {
                [e.target.name]: e.target.value
            },
            () => console.log(this.state)
        );
    };
    submitHandle = e => {
        e.preventDefault();
        const data = {
            user_id: this.state.user_id,
            nama_pendaftar: this.state.nama_pendaftar,
            alamat_pendaftar: this.state.alamat_pendaftar,
            tanggal_lahir: this.state.tanggal_lahir,
            nama_wali: this.state.nama_wali,
            nama_ayah: this.state.nama_ayah,
            nama_ibu: this.state.nama_ibu,
            status: this.state.status
        };
        axios
            .post(
                "http://127.0.0.1:8000/api/formulir",
                data
            )
            .then(res => {
                this.props.history.push("/dashboard");
            });
    };
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <Form onSubmit={this.submitHandle}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Nama Pendaftar</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nama_pendaftar"
                                    placeholder="masukkan nama"
                                    onChange={this.changeHandle}
                                    required
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Tanggal Lahir</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="tanggal_lahir"
                                    placeholder="examp 29-oktober-2003"
                                    onChange={this.changeHandle}
                                    required
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>alamat</Form.Label>
                            <Form.Control
                                placeholder="masukkan almamat"
                                name="alamat_pendaftar"
                                onChange={this.changeHandle}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Nama Wali</Form.Label>
                            <Form.Control
                                placeholder="nama wali murid"
                                name="nama_wali"
                                onChange={this.changeHandle}
                                type="text"
                                required
                            />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Nama Ayah</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nama_ayah"
                                    placeholder="masukkan nama ayah"
                                    onChange={this.changeHandle}
                                    required
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Status Tinggal</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="status"
                                    onChange={this.changeHandle}
                                    required
                                >
                                    <option>choose ...</option>
                                    <option value="dengan orang tua">
                                        dengan orang tua
                                    </option>
                                    <option value="dengan kakek">
                                        dengan kakek
                                    </option>
                                    <option value="anak yatim/piatu">
                                        anak yatim/piatu
                                    </option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>nama_ibu</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nama_ibu"
                                    placeholder="masukkan nama ibu"
                                    onChange={this.changeHandle}
                                    required
                                />
                            </Form.Group>
                        </Form.Row>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Link to="/dashboard" className="btn btn-success form">
                            Kembali
                        </Link>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Formulir;
