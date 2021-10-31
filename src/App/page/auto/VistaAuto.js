import React from 'react'
import useFetch from '../../hooks/useFetch';
import TablaAuto from '../../components/auto/TablaAuto'

const VistaAuto = () => {
    const { datos: listaAutos } = useFetch('/auto');
    return (
        <TablaAuto
        listaAutos={listaAutos}
        >            
        </TablaAuto>
    )
}

export default VistaAuto
