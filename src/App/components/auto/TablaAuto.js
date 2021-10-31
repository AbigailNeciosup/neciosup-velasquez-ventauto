import React from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const TablaAuto = ({listaAutos}) => {
    const encabezado = () =>{
        return (
            <tr>
                <th>Id</th>
                <th>Modelo</th>
                <th>Placa</th>
                <th>Color</th>
                <th>IdMarca</th>
                <th></th>
            </tr>
        );
    }

    const celdas = () => {
        let numero=0;
        return (            
            listaAutos.map((auto) => (
                <tr key={auto.id}>
                    <th>{numero+=1}</th>
                    <td>{auto.modelo}</td>
                    <td>{auto.placa}</td>
                    <td>{auto.color}</td>
                    <td>{auto.idMarca}</td>
                    <td>
                        <Link to={"/editarAuto/" + auto.id}>
                            Editar
                        </Link>
                    </td>
                </tr>
            ))
        );
    }
    return (
        <div>
        <h3>Listado de Autos</h3>
                <Link to="/agregarAuto" className="btn btn-primary mb-2">
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

export default TablaAuto
