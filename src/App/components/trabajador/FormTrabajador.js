import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FormTrabajador = ({ 
    onSubmit,
    onChange,
    trabajador}) => {
    return (
        <div>
            <h3>Agregar Trabajador</h3>
            <Form onSubmit={onSubmit}>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="nombres"
                                placeholder="Ingrese Nombre"
                                value={trabajador.nombres}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>                                        
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Apellido Paterno:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="apellidoPaterno"
                                placeholder="Ingrese apellido Paterno"
                                value={trabajador.apellidoPaterno}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>                                        
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Apellido Materno:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="apellidoMaterno"
                                placeholder="Ingrese apellido Materno"
                                value={trabajador.apellidoMaterno}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>                                        
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                                <Form.Label>Tipo Documento:</Form.Label>
                                    <Form.Control 
                                            size="sm"
                                            as="select"
                                            name="tipoDocumento"
                                            value={trabajador.tipoDocumento}
                                            onChange={onChange}
                                            required
                                    >
                                    <option value="">-- Seleccionar --</option>
                                    <option value="DNI">DNI</option>
                                    <option value="Carn??t Extranjeria">Carn??t Extranjeria</option>
                                    <option value="Pasaporte">Pasaporte</option>
                                </Form.Control>
                            </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Numero Documento</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="numeroDocumento"
                                placeholder="Ingrese N??mero Documento"
                                value={trabajador.numeroDocumento}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>                                        
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                size="sm"
                                type="email"
                                name="correo"
                                placeholder="ejemplo@ejemplo.com"
                                value={trabajador.correo}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>                                        
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Button className="btn btn-primary" type="submit" style={{ marginRight: "10px" }}>
                            Registrar
                        </Button>
                        <Link to="/trabajadores" className="btn btn-danger">
                            Cancelar
                        </Link>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default FormTrabajador
