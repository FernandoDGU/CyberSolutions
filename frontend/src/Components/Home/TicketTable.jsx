import React from 'react'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
const columns = [
    {
        name: 'Título',
        selector: row => row.nombre,
        sortable: true,
    },
    {
        name: 'Fecha',
        selector: row => row.fecha_publicacion,
        sortable: true,
    },
    {
        name: 'Autor',
        selector: row => row.autor,
        sortable: true,
    },
    {
        name: 'Comentarios',
        selector: row => row.commentAmount,
        sortable: true,
    },
    {
        name: 'Estado',
        selector: row => row.estado,
        sortable: true,
    },
    {
        name: 'Categoría',
        selector: row => row.categoria,
        sortable: true,
    },
];

const data = [
    {
        id: 1,
        nombre: 'Beetlejuice',
        fecha_publicacion: '2022/10/23',
        autor: 'Darien Sánchez',
        commentAmount: '51',
        estado: 'Abierto',
        categoria: 'Soporte técnico',
    },
    {
        id: 2,
        nombre: 'Ghostbusters',
        fecha_publicacion: '2022/10/22',
        autor: 'Darien Sánchez',
        commentAmount: '51',
        estado: 'Abierto',
        categoria: 'Soporte técnico',
    },
    {
        id: 3,
        nombre: 'Ghostbusters 2',
        fecha_publicacion: '2022/10/21',
        autor: 'Darien Sánchez',
        commentAmount: '51',
        estado: 'Abierto',
        categoria: 'Soporte técnico',
    },
    {
        id: 4,
        nombre: 'asd, ipsum asd.asd, ipsum asd.asd, ipsum asd.asd, ipsum asd.',
        fecha_publicacion: '2022/10/20',
        autor: 'Darien Sánchez',
        commentAmount: '51',
        estado: 'Abierto',
        categoria: 'Soporte técnico',
    },
    {
        id: 5,
        nombre: 'Lorem ipsum',
        fecha_publicacion: '2022/10/19',
        autor: 'Darien Sánchez',
        commentAmount: '51',
        estado: 'Abierto',
        categoria: 'Soporte técnico',
    },
]

export default function TicketTable() {
    const navigate = useNavigate();

    const ExpandedComponent = ({ data }) => <pre>{data.nombre}</pre>;

    var clickedRow = row => {
        navigate('/ver-ticket?id=' + row.id)
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

