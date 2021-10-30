import React from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const TablaTrabajador = ({listaTrabajadores}) => {
    const encabezado = () =>{
        return (
            <tr>
                <th>Id</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Tipo Documento</th>
                <th>Numero Documento</th>
                <th>Correo</th>
                <th></th>
            </tr>
        );
    }

    const celdas = () => {
        let numero=0;
        return (            
            listaTrabajadores.map((trabajador) => (
                <tr key={trabajador.id}>
                    <th>{numero+=1}</th>
                    <td>{trabajador.nombres}</td>
                    <td>{trabajador.apellidoPaterno + ' ' + trabajador.apellidoMaterno}</td>
                    <td>{trabajador.tipoDocumento}</td>
                    <td>{trabajador.numeroDocumento}</td>
                    <td>{trabajador.correo}</td>
                    <td>
                        <Link to={"/editarTrabajador/" + trabajador.id}>
                            Editar
                        </Link>
                    </td>
                </tr>
            ))
        );
    }
    return (
        <div>
        <h3>Listado de Trabajadores</h3>
                <Link to="/agregarTrabajador" className="btn btn-primary mb-2">
                    Agregar
                </Link>
                <Table responsive>
                    <thead className="bg-dark text-light">
                        { encabezado() }
                    </thead>
                    <tbody>
                        { celdas() }
                    </tbody>
                </Table>      
        </div>
    )
}

export default TablaTrabajador
