import React from 'react'
import useFetch from '../../hooks/useFetch';
import TablaUsuario from '../../components/usuario/TablaUsuario'
const VistaUsuario = () => {
    const { datos: listaUsuarios } = useFetch('/usuario');
    return (
        <>
            <TablaUsuario
            listaUsuarios={listaUsuarios}
            >
            </TablaUsuario>
        </>
    )
}

export default VistaUsuario
