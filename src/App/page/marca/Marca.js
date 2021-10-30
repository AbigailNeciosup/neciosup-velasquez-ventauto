import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { crear } from '../../../services/api';
import FormMarca from '../../components/marca/FormMarca';

const Marca = () => {
    const [ marca, setMarca ] = useState({
        nombre: ''
    });

    const history = useHistory();

    const handleChange = (event) => {
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setMarca({
            ...marca,
            [nombre]: valor
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (event.currentTarget.checkValidity()) {
                await crear('/marca', marca);
                history.push('/marcas');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al agregar");
        }
    }
    return (
        <>
            <FormMarca
                marca={marca}
                onChange={handleChange}
                onSubmit={handleSubmit}
            >                
            </FormMarca>
        </>
    )
}

export default Marca
