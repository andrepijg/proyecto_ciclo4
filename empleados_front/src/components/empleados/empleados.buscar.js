import React from "react";
import { request } from "../helper/helper";
import { Container, Row } from "react-bootstrap";
import "./empleados.css";
import BoostrapTable from 'react-boostrap-table-next';


const products = [
    {
        id: 1,
        name: "producto 1",
        price: 5000,
    }
];
const columns = [{
    dataField: 'id',
    text: 'Product ID'
}, {
    dataField: 'name',
    text: 'Product Name'
}, {
    dataField: 'price',
    text: 'Product Price'
}];


export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container id="empleados-buscar-container">
                <Row>
                    <h1>Buscar Empleados</h1>
                </Row>
                <Row>
                    <BoostrapTable keyField = 'id' data = {products} columns = {columns}/>
                </Row>
            </Container>
        );
    }
}