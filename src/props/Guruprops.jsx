import React from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";

const Guruprops = ({ tampil, show, tutup, click, datas, canged, submited }) => {
    return (
        <div>
            <Button onClick={tampil}>
                <ion-icon name="pencil-outline"></ion-icon>

            </Button>
            <Modal show={show} onHide={tutup}>
                <form onSubmit={submited}>
                    <Modal.Header>
                         Edit Data {datas.nama_guru}
                    </Modal.Header>
                    <Modal.Body>
                        <input type="hidden" value={datas.id} disabled />
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Nama Guru</Form.Label>
                            <Form.Control
                                type="text"
                                name="nama_guru"
                                placeholder="Masukkan Nama Guru"
                                value={datas.nama_guru}
                                name="nama_guru"
                                onChange={canged}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Alamat Guru</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Masukkan Alamat"
                                name="alamat_guru"
                                value={datas.alamat_guru}
                                name="alamat_guru"
                                onChange={canged}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>deskripsi guru</Form.Label>
                            <Form.Control
                                name="deskripsi_guru"
                                type="text"
                                placeholder="Masukkan deskripsi guru"
                                value={datas.deskripsi_guru}
                                name="deskripsi_guru"
                                onChange={canged}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>mengampu</Form.Label>
                            <Form.Control
                                as="select"
                                name="mengampu"
                                onChange={canged}
                                value={datas.mengampu}
                            >
                                <option>choose ...</option>
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
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={tutup}>
                            Close
                        </Button>
                        <Button type="submit" variant="primary" onClick={tutup}>
                            Simpan Edit
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
};

export default Guruprops;
