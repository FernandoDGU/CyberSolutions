import { Typography } from '@mui/material';
import React from 'react'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { reformatDate } from '../../Utils/DateManagement';

const columns = [
    {
        name: 'Id',
        selector: row => row._id,
        sortable: true,
    },
    {
        name: 'Título',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Fecha',
        selector: row => reformatDate(row.startDate),
        sortable: true,
    },
    {
        name: 'Autor',
        selector: row => row._user.name,
        sortable: true,
    },
    {
        name: 'Estado',
        selector: row => row.state,
        sortable: true,
    },
    {
        name: 'Categoría',
        selector: row => row._category.name,
        sortable: true,
    },
];


const paginationOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsText: 'Todos'
}

export default function AllTicketsTable(props) {
    const navigate = useNavigate();
    const ExpandedComponent = ({ data }) => <pre>{data.nombre}</pre>;

    var clickedRow = row => {
        navigate('/ver-ticket?id=' + row._id)
      }

  return (
    <DataTable
            columns={columns}
            data={props.data}
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
