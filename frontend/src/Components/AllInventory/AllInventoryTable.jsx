import { Typography } from '@mui/material';
import React from 'react'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';

const columns = [
    {
        name: 'Id',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Nombre',
        selector: row => row.nombre,
        sortable: true,
    },
    {
        name: 'Porcentaje',
        selector: row => row.porcentaje,
        sortable: true,
    },
    {
        name: 'Categoria',
        selector: row => row.categoria,
        sortable: true,
    }
];

const data = [
    {
        id: 1,
        nombre: 'Beetlejuice',
        porcentaje: 100,
        categoria: 'Soporte técnico',
    },
    {
        id: 2,
        nombre: 'Ghostbusters',
        porcentaje: 100,
        categoria: 'Soporte técnico',
    },
    {
        id: 3,
        nombre: 'Ghostbusters 2',
        porcentaje: 90,
        categoria: 'Soporte técnico',
    },
    {
        id: 4,
        nombre: 'asd, ipsum asd.asd, ipsum asd.asd, ipsum asd.asd, ipsum asd.',
        porcentaje: 87,
        categoria: 'Soporte técnico',
    },
    {
        id: 5,
        nombre: 'Lorem ipsum',
        porcentaje: 60,
        categoria: 'Soporte técnico',
    },
]

const paginationOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsText: 'Todos'
}

export default function AllInventoryTable(props) {
    const navigate = useNavigate();
    const ExpandedComponent = ({ data }) => <pre>{data.nombre}</pre>;

    var clickedRow = row => {
        navigate('/editar-inventario?id=' + row.id)
      }

  return (
    <DataTable
            columns={columns}
            data={data}
            onRowClicked={clickedRow}
            selectableRowsSingle
            title={props.tableTitle}
            pointerOnHover
            highlightOnHover
            pagination
            paginationComponentOptions={paginationOptions}
            progressPending={false}
            progressComponent={<Typography variant='h3'>Hola</Typography>}
        />
        )
}
