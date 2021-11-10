import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./login.css";
import axios from "axios";
import { APIHOST as host } from "C:/Users/Andrea/Desktop/PROYECTO CICLO 4/empleados_front/src/App.json"
// creo el constructor colocando tres CCC

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: "",
            pass: "",
        };
    }
    iniciarSesion() {
        axios.post(`${host}/usuarios/login`, {
                usuario: this.state.usuario,
                pass: this.state.pass,
            })

            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });

        // alert(`usuario: ${this.state.usuario} password: ${this.state.pass}`);
    }
    render() {
        return (
            <Container id="login-container" style={{ marginTop: 200 }}>
                <Row>
                    <Col>
                        <Row>
                            <h2>Iniciar sesión</h2>
                        </Row>
                        <Row>
                            <Col
                                sm="12"
                                xs="12"
                                md={{ span: 4, offset: 4 }}
                                lg={{ span: 4, offset: 4 }}
                                xl={{ span: 4, offset: 4 }}
                            >
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control
                                            onChange={(e) =>
                                                this.setState({ usuario: e.target.value })
                                            }
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>
                                            Contraseña
                                        </Form.Label>
                                        <Form.Control
                                            type="password"
                                            onChange={(e) => this.setState({ pass: e.target.value })}
                                        />
                                    </Form.Group>

                                    <Button
                                        variant="success"
                                        style = {{marginTop: 20, width:"100%"}}
                                        onClick={() => {
                                            this.iniciarSesion();
                                        }}
                                    >
                                        Iniciar sesión
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}