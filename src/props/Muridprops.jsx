import React from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import "./murid.css";

const Muridprops = ({
    datas,
    tampil,
    handleClose,
    show,
    submit,
    handleChangeProps
}) => {
    return (
        <div>
            <Button variant="primary" onClick={tampil}>
                <ion-icon name="pencil-outline"></ion-icon>

            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit {datas.nama_pendaftar}
                    </Modal.Title>
                </Modal.Header>
                <Form onSubmit={submit}>
                    <Modal.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Nama Pendaftar</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nama_pendaftar"
                                    value={datas.nama_pendaftar}
                                    placeholder="masukkan nama"
                                    onChange={handleChangeProps}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Tanggal Lahir</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="tanggal_lahir"
                                    value={datas.tanggal_lahir}
                                    placeholder="examp 29-oktober-2003"
                                    onChange={handleChangeProps}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>alamat</Form.Label>
                            <Form.Control
                                placeholder="masukkan almamat"
                                value={datas.alamat_pendaftar}
                                name="alamat_pendaftar"
                                onChange={handleChangeProps}
                            />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Nama Wali</Form.Label>
                            <Form.Control
                                placeholder="nama wali murid"
                                value={datas.nama_wali}
                                name="nama_wali"
                                onChange={handleChangeProps}
                                type="text"
                            />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Nama Ayah</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nama_ayah"
                                    value={datas.nama_ayah}
                                    placeholder="masukkan nama ayah"
                                    onChange={handleChangeProps}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Status Tinggal</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={datas.status}
                                    name="status"
                                    onChange={handleChangeProps}
                                >
                                    <option>choose ..</option>
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
                                    value={datas.nama_ibu}
                                    onChange={handleChangeProps}
                                />
                            </Form.Group>
                        </Form.Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button
                            type="submit"
                            variant="primary"
                            onClick={handleClose}
                        >
                            Simpan Edit
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
};

export default Muridprops;
