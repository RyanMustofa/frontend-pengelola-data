import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Col } from "react-bootstrap";
import axios from "axios";
import "./css.css";
import Navbar from "../navbar/Navbar";

class TambahGuru extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama_guru: "",
            mengampu: "",
            deskripsi_guru: "",
            alamat_guru: ""
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
    submitChange = e => {
        e.preventDefault();
        const data = {
            nama_guru: this.state.nama_guru,
            mengampu: this.state.mengampu,
            deskripsi_guru: this.state.deskripsi_guru,
            alamat_guru: this.state.alamat_guru
        };
        axios
            .post("http://127.0.0.1:8000/api/guru", data)
            .then(res => this.props.history.push("/guru"));
    };
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <Form onSubmit={this.submitChange}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Nama Guru</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nama_guru"
                                    placeholder="Masukkan Nama Guru"
                                    onChange={this.changeHandle}
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Alamat Guru</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Masukkan Alamat"
                                    name="alamat_guru"
                                    onChange={this.changeHandle}
                                    required
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Deskripsi</Form.Label>
                                <Form.Control
                                    name="deskripsi_guru"
                                    type="text"
                                    placeholder="Masukkan deskripsi guru"
                                    onChange={this.changeHandle}
                                    required
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>mengampu</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="mengampu"
                                    onChange={this.changeHandle}
                                    required
                                >
                                    <option>choose ..</option>
                                    <option value="kelas 1">Kelas 1</option>
                                    <option value="kelas 2">Kelas 2</option>
                                    <option value="kelas 3">Kelas 3</option>
                                    <option value="kelas 4">Kelas 4</option>
                                    <option value="kelas 5">Kelas 5</option>
                                    <option value="kelas 6">Kelas 6</option>
                                    <option value="olahraga">olahraga</option>
                                    <option value="agama">agama</option>
                                    <option value="bahasa inggris">
                                        bahasa inggris
                                    </option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Link className="btn btn-danger but" to="/dashboard">
                            kembali
                        </Link>
                    </Form>
                </div>
            </div>
        );
    }
}

export default TambahGuru;
