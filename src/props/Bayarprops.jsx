import React from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";

const Bayarprops = ({
    tampil,
    show,
    data,
    handleClose,
    submit,
    changeHandle
}) => {
    return (
        <div>
            <Button variant="primary" onClick={tampil}>
                <ion-icon name="pencil-outline"></ion-icon>

            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                         Edit pembayaran {data.nama}
                    </Modal.Title>
                </Modal.Header>

                <Form onSubmit={submit}>
                    <Modal.Body>
                        <input
                            type="hidden"
                            value={data.id}
                            name="id"
                            onChange={changeHandle}
                        />
                        <Form.Group>
                            <Form.Label>nama</Form.Label>
                            <Form.Control
                                type="text"
                                value={data.nama}
                                name="nama"
                                onChange={changeHandle}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Kelas</Form.Label>
                            <Form.Control
                                as="select"
                                value={data.kelas}
                                name="kelas"
                                value={data.kelas}
                                onChange={changeHandle}
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

                        <Form.Group>
                            <Form.Label>jumlah</Form.Label>
                            <Form.Control
                                type="number"
                                name="jumlah"
                                value={data.jumlah}
                                onChange={changeHandle}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Membayar</Form.Label>
                            <Form.Control
                                type="number"
                                name="baru_bayar"
                                value={data.baru_bayar}
                                onChange={changeHandle}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Lunas/Belum Lunas</Form.Label>
                            <Form.Control
                                as="select"
                                name="lunas"
                                value={data.lunas}
                                onChange={changeHandle}
                            >
                                <option>Choose...</option>
                                <option value="lunas">Lunas</option>
                                <option value="belum lunas">Belum-Lunas</option>
                            </Form.Control>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            type="submit"
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

export default Bayarprops;
