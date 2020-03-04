import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import Guruprops from "../../props/Guruprops";
import ReactToExcel from 'react-html-table-to-excel';

class Guru extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guru: [],
            show: false,
            index: 0,
            dataArr: {
                id: 0,
                nama_guru: "",
                mengampu: "",
                deskripsi_guru: "",
                alamat_guru: ""
            }
        };
    }
    getAllData = () => {
        axios
            .get("http://127.0.0.1:8000/api/guru")
            .then(res => res.data)
            .then(data => this.setState({ guru: data }));
    };
    componentDidMount() {
        this.getAllData();
    }
    changeHandle = e => {
        this.setState(
            {
                dataArr: {
                    ...this.state.dataArr,
                    [e.target.name]: e.target.value
                }
            },
            () => console.log(this.state)
        );
    };
    handleModal = (data, i) => {
        this.setState({ show: true, index: i });
        axios
            .get(
                `http://127.0.0.1:8000/api/guru/${data}`
            )
            .then(res => res.data)
            .then(data => this.setState({ dataArr: data }));
    };
    submitHandle = (e, id) => {
        e.preventDefault();
        const { guru, dataArr, index } = this.state;
        this.setState({
            guru: [...guru.splice(0, index), dataArr, ...guru.splice(index + 1)]
        });
        // const filtering = guru.filter(data => data.id == id)
        console.log(id, index);
        axios
            .put(
                `http://127.0.0.1:8000/api/guru/${id}`,
                dataArr
            )
            .then(res => res.data)
            .then(data => console.log(data));
    };
    removeHandle = id => {
        const filtered = this.state.guru.filter(data => data.id !== id);
        console.log(filtered);
        axios
            .delete(
                `http://127.0.0.1:8000/api/guru/${id}`
            )
            .then(res => {
                console.log(res);
                this.setState({ guru: filtered });
            });
    };
    handleClose = () => {
        this.setState({ show: false });
    };
    handleClick = (id) => {
        this.props.history.push(`/detail-guru/${id}`)
    }
    render() {
        const id = this.state.dataArr.id;
        return (
            <div>
                <Navbar />
                <div className="container">
                    <Link to="/addguru" className="btn btn-primary">
                        Tambah
                    </Link>
                    <Table striped bordered hover id="table-guru">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nama Guru</th>
                                <th>Mengampu</th>
                                <th>Deskripsi Guru</th>
                                <th>Alamat Guru</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.guru &&
                                this.state.guru.map((gurus, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{gurus.nama_guru}</td>
                                            <td>{gurus.mengampu}</td>
                                            <td>{gurus.deskripsi_guru}</td>
                                            <td>{gurus.alamat_guru}</td>
                                            <td style={{ display: "flex" }}>
                                                <button
                                                    onClick={() =>
                                                        this.handleClick(
                                                            gurus.id
                                                        )
                                                    }
                                                    className="btn btn-success"
                                                >
                                                    <ion-icon name="eye-outline"></ion-icon>
                                                </button>
                                                <Guruprops
                                                    show={this.state.show}
                                                    data={gurus}
                                                    tutup={() =>
                                                        this.handleClose()
                                                    }
                                                    tampil={() =>
                                                        this.handleModal(
                                                            gurus.id,
                                                            i
                                                        )
                                                    }
                                                    datas={this.state.dataArr}
                                                    canged={this.changeHandle}
                                                    submited={e =>
                                                        this.submitHandle(e, id)
                                                    }
                                                ></Guruprops>
                                                <Button
                                                    variant="success"
                                                    onClick={() =>
                                                        this.removeHandle(
                                                            gurus.id
                                                        )
                                                    }
                                                >
                                                    <ion-icon name="trash-outline"></ion-icon>

                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </Table>
                    <ReactToExcel 
                        className="btn btn-warning"
                        table="table-guru"
                        filename="daftar-guru"
                        sheet = "sheet 1"
                        buttonText = "EXPORT TO EXEL"
                    />
                    <Link className="btn btn-danger" to="/dashboard">
                        kembali
                    </Link>
                </div>
            </div>
        );
    }
}

export default Guru;
