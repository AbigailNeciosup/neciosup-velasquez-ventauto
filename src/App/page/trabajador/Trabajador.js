import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { crear } from '../../../services/api';
import FormTrabajador from '../../components/trabajador/FormTrabajador'

const Trabajador = () => {
    const [ trabajador, setTrabajador ] = useState({
        nombres: '',
        apellidoPaterno:'',
        apellidoMaterno:'',
        tipoDocumento:'',
        numeroDocumento:'',
        correo:''
    });

    const history = useHistory();

    const handleChange = (event) => {
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setTrabajador({
            ...trabajador,
            [nombre]: valor
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (event.currentTarget.checkValidity()) {
                await crear('/trabajador', trabajador);
                history.push('/trabajadores');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al agregar");
        }
    }
    return (
        <FormTrabajador
            trabajador={trabajador}
            onChange={handleChange}
            onSubmit={handleSubmit}
        >            
        </FormTrabajador>
    )
}

export default Trabajador
