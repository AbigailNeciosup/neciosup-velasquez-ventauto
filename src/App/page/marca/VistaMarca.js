import React from 'react'
import useFetch from '../../hooks/useFetch';
import TablaMarca from '../../components/marca/TablaMarca';

const VistaMarca = () => {
    const { datos: listaMarcas } = useFetch('/marca');
    return (
        <div>
            <TablaMarca
                listaMarcas={listaMarcas}>
            </TablaMarca>
        </div>
    )
}

export default VistaMarca
