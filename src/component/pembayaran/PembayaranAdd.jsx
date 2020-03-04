import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

class PembayaranAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: "",
            kelas: "",
            jumlah: 0,
            baru_bayar: 0,
            lunas: ""
        };
    }
    changeHandle = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    submitHandle = e => {
        e.preventDefault();
        const bayar = {
            id: localStorage.getItem("id"),
            nama: this.state.nama,
            kelas: this.state.kelas,
            jumlah: this.state.jumlah,
            baru_bayar: this.state.baru_bayar,
            lunas: this.state.lunas
        };
        axios
            .post(
                "http://127.0.0.1:8000/api/pembayaran",
                bayar
            )
            .then(res => res.data)
            .then(data => this.props.history.push("/pembayaran"));
    };
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <Form onSubmit={this.submitHandle}>
                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Nama</Form.Label>
                            <Form.Control
                                type="text"
                                name="nama"
                                placeholder="Enter name"
                                onChange={this.changeHandle}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Kelas</Form.Label>
                            <Form.Control
                                as="select"
                                name="kelas"
                                onChange={this.changeHandle}
                                required
                            >
                                <option>choose ..</option>
                                <option value="kelas 1">kelas 1</option>
                                <option value="kelas 2">kelas 2</option>
                                <option value="kelas 3">kelas 3</option>
                                <option value="kelas 4">kelas 4</option>
                                <option value="kelas 5">kelas 5</option>
                                <option value="kelas 6">kelas 6</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Jumlah</Form.Label>
                            <Form.Control
                                type="number"
                                name="jumlah"
                                placeholder="Jumlah pembayaran"
                                onChange={this.changeHandle}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Bayar</Form.Label>
                            <Form.Control
                                type="number"
                                name="baru_bayar"
                                placeholder="baru bayar"
                                onChange={this.changeHandle}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Lunas/Belum</Form.Label>
                            <Form.Control
                                as="select"
                                name="lunas"
                                onChange={this.changeHandle}
                                required
                            >
                                <option>choose ..</option>
                                <option value="lunas">lunas</option>
                                <option value="belum lunas">belum lunas</option>
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Link to="/pembayaran" className="btn btn-danger mar">
                            kembali
                        </Link>
                    </Form>
                </div>
            </div>
        );
    }
}

export default PembayaranAdd;
