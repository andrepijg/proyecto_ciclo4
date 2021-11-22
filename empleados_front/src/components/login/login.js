import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./login.css";
import axios from "axios";
import { APIHOST as host } from "../../App.json"
import { isNull } from "util";
import Cookies from "universal-cookie";
import { calcularExpiracionSesion } from "../helper/helper";
import Loading from "../loading/loading";

// creo el constructor colocando tres CCC
const cookies = new Cookies()

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            usuario: "",
            pass: "",
        };
    }
    iniciarSesion() {
        this.setState({ loading: true });
        axios.post(`${host}/usuarios/login`, {
            usuario: this.state.usuario,
            pass: this.state.pass,
        })
            .then((response) => {
                if (isNull(response.data.token)) {
                    alert("usuario y/o contraseña invalidos")
                } else {
                    cookies.set("_s", response.data.token, {
                        path: "/",
                        expires: calcularExpiracionSesion(),
                    });
                }
                this.props.history.push('/empleados');
                this.setState({ loading: false });

            })
            .catch((err) => {
                console.log(err);
                this.setState({ loading: false });
            });

        // alert(`usuario: ${this.state.usuario} password: ${this.state.pass}`);
    }
    render() {
        return (
            <Container id="login-container" >
                <Loading show={this.state.loading} />
                <Row>
                    <Col>
                        <Row style={{ marginTop: 200 }}>
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
                                        style={{ marginTop: 20, width: "100%" }}
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