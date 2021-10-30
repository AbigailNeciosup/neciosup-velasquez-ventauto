import React from 'react'
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';


const EditarMarca = ({
    marca,
    onChange,
    onSubmit    
}) => {
    return (
        <div>
            <h3>Editar Marca</h3>
            <Form onSubmit={onSubmit}>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Marca:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="nombre"
                                placeholder="Ingrese marca"
                                value={marca.nombre}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>                                        
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Button className="btn btn-primary" type="submit" style={{ marginRight: "10px" }}>
                            Actualizar
                        </Button>
                        <Link to="/marcas" className="btn btn-danger">
                            Cancelar
                        </Link>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default EditarMarca
