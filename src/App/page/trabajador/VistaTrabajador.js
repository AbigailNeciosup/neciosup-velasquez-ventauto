import React from 'react'
import useFetch from '../../hooks/useFetch';
import TablaTrabajador from '../../components/trabajador/TablaTrabajador'

const VistaTrabajador = () => {
    const { datos: listaTrabajadores } = useFetch('/trabajador');
    return (
        <TablaTrabajador
        listaTrabajadores={listaTrabajadores}
        >
        </TablaTrabajador>
    )
}

export default VistaTrabajador
