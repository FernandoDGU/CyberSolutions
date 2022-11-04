import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const data = [
  {
    "name": "Inventario 1",
    "porcentaje": 40
  },
  {
    "name": "Inventario 2",
    "porcentaje": 45
  },
  {
    "name": "Inventario 3",
    "porcentaje": 50
  },
  {
    "name": "Inventario 4",
    "porcentaje": 34
  },
  {
    "name": "Inventario 5",
    "porcentaje": 22
  },
  {
    "name": "Inventario 6",
    "porcentaje": 80
  },
  {
    "name": "Inventario 7",
    "porcentaje": 97
  }
]

export default function ChartBar() {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="porcentaje" fill="#8884d8" />
      </BarChart>
      </ResponsiveContainer>
  )
}
