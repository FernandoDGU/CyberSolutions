import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { getLast5 } from '../../Services/ReporteService';
import { reformatDate } from '../../Utils/DateManagement';
const columns = [
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

export default function TicketTable(props) {
    const [data, setData] = useState([])
    const navigate = useNavigate();

    async function getLast5Function(){
        const res = await getLast5(props.sucursal);
        setData(res.data)

    }

    useEffect(()=> {
        getLast5Function()


    },[]);

    const ExpandedComponent = ({ data }) => <pre>{data.nombre}</pre>;

    var clickedRow = row => {
        navigate('/ver-ticket?id=' + row._id)
      }

  return (
    <DataTable
            columns={columns}
            data={data}
            onRowClicked={clickedRow}
            selectableRowsSingle
            title="Últimos 5 tickets creados."
            pointerOnHover
            highlightOnHover
        />
  )
}

