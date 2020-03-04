import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactToExcel from 'react-html-table-to-excel';
import { Table } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import Bayarprops from "../../props/Bayarprops";

class Pembayaran extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            index: 0,
            show: false,
            bayar: {
                id: 0,
                nama: "",
                kelas: "",
                jumlah: 0,
                baru_bayar: 0,
                lunas: ""
            }
        };
    }
    getAllData = () => {
        axios
            .get("http://127.0.0.1:8000/api/pembayaran")
            .then(res => res.data)
            .then(data =>
                this.setState({
                    datas: data
                })
            );
    };
    componentDidMount() {
        this.getAllData();
    }
    tampilHandle = (id, i) => {
        this.setState({ show: true, index: i });
        axios
            .get(
                `http://127.0.0.1:8000/api/pembayaran/${id}`
            )
            .then(res => res.data)
            .then(data => this.setState({ bayar: data }));
    };
    handleClose = () => {
        this.setState({ show: false });
    };
    changeHandle = e => {
        this.setState(
            {
                bayar: {
                    ...this.state.bayar,
                    [e.target.name]: e.target.value
                }
            },
            () => console.log(this.state)
        );
    };
    submitHandle = (e, id) => {
        e.preventDefault();
        const { datas, index, bayar } = this.state;
        axios
            .put(
                `http://127.0.0.1:8000/api/pembayaran/${id}`,
                bayar
            )
            .then(res => res.data)
            .then(data =>
                this.setState({
                    datas: [
                        ...datas.splice(0, index),
                        bayar,
                        ...datas.splice(index + 1)
                    ]
                })
            );
    };
    handleRemove = id => {
        console.log(id);
        const filtered = this.state.datas.filter(data => data.id !== id);
        axios
            .delete(
                `http://127.0.0.1:8000/api/pembayaran/${id}`
            )
            .then(res => {
                console.log(res.data);
                this.setState({ datas: filtered });
            });
    };
    handleClick = (id) => {
        this.props.history.push(`/detail-bayar/${id}`)
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <Link to="tambah-pembayaran" className="btn btn-primary">
                        tambah
                    </Link>
                    <Table striped bordered hover id="table-pembayaran">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nama</th>
                                <th>Kelas</th>
                                <th>Jumlah</th>
                                <th>Baru Bayar</th>
                                <th>Lunas</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.datas.map((data, i) => {
                                return (
                                    <tr key={data.id}>
                                        <td>{i + 1}</td>
                                        <td>{data.nama}</td>
                                        <td>{data.kelas}</td>
                                        <td>{data.jumlah}</td>
                                        <td>{data.baru_bayar}</td>
                                        <td>{data.lunas}</td>
                                        <td style={{ display: "flex" }}>
                                                <button
                                                    onClick={() =>
                                                        this.handleClick(
                                                            data.id
                                                        )
                                                    }
                                                    className="btn btn-success"
                                                >
                                                    <ion-icon name="eye-outline"></ion-icon>
                                                </button>
                                            <Bayarprops
                                                tampil={() =>
                                                    this.tampilHandle(
                                                        data.id,
                                                        i
                                                    )
                                                }
                                                show={this.state.show}
                                                handleClose={this.handleClose}
                                                data={this.state.bayar}
                                                changeHandle={this.changeHandle}
                                                submit={e =>
                                                    this.submitHandle(
                                                        e,
                                                        this.state.bayar.id
                                                    )
                                                }
                                            ></Bayarprops>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() =>
                                                    this.handleRemove(data.id)
                                                }
                                            >
                                                <ion-icon name="trash-outline"></ion-icon>

                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                    <ReactToExcel 
                        table="table-pembayaran"
                        filename="data pembayaran siswa"
                        sheet="sheet 1"
                        buttonText="EXPORT TO EXCEL"
                        className="btn btn-warning"
                    />
                </div>
            </div>
        );
    }
}

export default Pembayaran;
