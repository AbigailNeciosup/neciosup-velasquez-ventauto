import React from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const TablaUsuario = ({listaUsuarios}) => {
    const encabezado = () =>{
        return (
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Clave</th>
                <th>Vigencia</th>
                <th>Id Trabajador</th>
                <th></th>
            </tr>
        );
    }

    const celdas = () => {
        let numero=0;
        return (            
            listaUsuarios.map((usuario) => (
                <tr key={usuario.id}>
                    <th>{numero+=1}</th>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.clave}</td>
                    <td>{usuario.vigencia}</td>
                    <td>{usuario.idTrabajador}</td>
                    <td>
                        <Link to={"/editarusuario/" + usuario.id}>
                            Editar
                        </Link>
                    </td>
                </tr>
            ))
        );
    }
    return (
        <div>
        <h3>Listado de Usuarios</h3>
                <Link to="/agregarUsuario" className="btn btn-primary mb-2">
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

export default TablaUsuario
