import React, { Component } from "react";
import axios from "axios";
import ReactToExcel from 'react-html-table-to-excel';
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./dashboard.css";
import Navbar from "../navbar/Navbar";
import Muridprops from "../../props/Muridprops";
import Detail from "../../props/detail";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formulir: [],
            searchField: "",
            dataArr: {
                id: 0,
                user_id: 0,
                nama_pendaftar: "",
                alamat_pendaftar: "",
                tanggal_lahir: "",
                nama_wali: "",
                nama_ayah: "",
                nama_ibu: "",
                status: ""
            },
            index: 0,
            show: false
        };
    }
    getAll = () => {
        axios
            .get("http://127.0.0.1:8000/api/formulir")
            .then(res => res.data)
            .then(data =>
                this.setState({
                    formulir: data
                })
            );
    };
    componentDidMount() {
        this.getAll();
    }
    handleTampil = (id, i) => {
        this.setState({ show: true, index: i });
        console.log(i);
        axios
            .get(`http://127.0.0.1:8000/api/formulir/${id}`)
            .then(res => res.data)
            .then(data => this.setState({ dataArr: data }));
    };
    handleClose = () => {
        this.setState({ show: false });
    };
    searchChange = e => {
        this.setState({
            searchField: e.target.value
        });
    };
    handleChangeProps = e => {
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
    handleSubmit = (e, id) => {
        e.preventDefault();
        const { index, dataArr, formulir } = this.state;
        this.setState({
            formulir: [
                ...formulir.splice(0, index),
                dataArr,
                ...formulir.splice(index + 1)
            ]
        });
        console.log(id, index);
        axios
            .put(`http://127.0.0.1:8000/api/formulir/${id}`, dataArr)
            .then(res => res.data)
            .then(data => console.log(data));
    };
    handleRemove = id => {
        const filtered = this.state.formulir.filter(data => data.id !== id);
        axios
            .delete(`http://127.0.0.1:8000//api/formulir/${id}`)
            .then(res => res.data)
            .then(data => this.setState({ formulir: filtered }));
    };
    handleClick = id => {
        this.props.history.push(`/detail/${id}`);
    };
    render() {
        const { formulir, searchField } = this.state;
        const id = this.state.dataArr.id;
        const filterSearch = formulir.filter(formulir =>
            formulir.nama_pendaftar
                .toLowerCase()
                .includes(searchField.toLowerCase())
        );
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="antar">
                        <Link to="/formulir" className="btn btn-primary bbl">
                            Tambah Murid
                        </Link>
                        <input
                            class="form-control mr-sm-2"
                            style={{ width: "30%" }}
                            align="center"
                            type="search"
                            onChange={this.searchChange}
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <Link to="/guru" className="btn btn-primary bbr">
                            Daftar Guru
                        </Link>
                    </div>
                    <div>
                        <table class="table" id="table-murid">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nama Siswa</th>
                                    <th scope="col">Alamat Siswa</th>
                                    <th scope="col">tanggal lahir Siswa</th>
                                    <th scope="col">nama wali Siswa</th>
                                    <th scope="col">nama ayah Siswa</th>
                                    <th scope="col">nama ibu Siswa</th>
                                    <th scope="col">status Siswa</th>
                                    <th scope="col">action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterSearch.map((form, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{form.nama_pendaftar}</td>
                                            <td>{form.alamat_pendaftar}</td>
                                            <td>{form.tanggal_lahir}</td>
                                            <td>{form.nama_wali}</td>
                                            <td>{form.nama_ayah}</td>
                                            <td>{form.nama_ibu}</td>
                                            <td>{form.status}</td>
                                            <td style={{ display: "flex" }}>
                                                <button
                                                    onClick={() =>
                                                        this.handleClick(
                                                            form.id
                                                        )
                                                    }
                                                    className="btn btn-success"
                                                >
                                                    <ion-icon name="eye-outline"></ion-icon>
                                                </button>
                                                <Muridprops
                                                    tampil={() =>
                                                        this.handleTampil(
                                                            form.id,
                                                            i
                                                        )
                                                    }
                                                    datas={this.state.dataArr}
                                                    show={this.state.show}
                                                    handleClose={
                                                        this.handleClose
                                                    }
                                                    handleChangeProps={
                                                        this.handleChangeProps
                                                    }
                                                    submit={e =>
                                                        this.handleSubmit(e, id)
                                                    }
                                                ></Muridprops>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() =>
                                                        this.handleRemove(
                                                            form.id
                                                        )
                                                    }
                                                >
                                                    <ion-icon name="trash-outline"></ion-icon>
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        <ReactToExcel 
                            className="btn btn-warning"
                            table="table-murid"
                            filename="daftar-murid"
                            sheet="sheet 1"
                            buttonText="EXPORT TO EXCEL"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
