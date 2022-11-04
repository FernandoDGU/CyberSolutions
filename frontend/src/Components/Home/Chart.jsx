import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      date: '09-04-2022',
      Creados: 4000,
      Cerrados: 2400,
      Abiertos: 1200,
      
    },
    {
      date: '09-06-2022',
      Creados: 3000,
      Cerrados: 1398,
      Abiertos: 1398 / 2,
      
    },
    {
      date: '09-08-2022',
      Creados: 2000,
      Cerrados: 9800,
      Abiertos: 9800 / 2,
      
    },
    {
      date: '09-10-2022',
      Creados: 2780,
      Cerrados: 3908,
      Abiertos: 3908 / 2,
      
    },
    {
      date: '09-12-2022',
      Creados: 1890,
      Cerrados: 4800,
      Abiertos: 4800 / 2,
      
    },
    {
      date: '09-14-2022',
      Creados: 2390,
      Cerrados: 3800,
      Abiertos: 3800 / 2,
      
    },
    {
      date: '09-16-2022',
      Creados: 3490,
      Cerrados: 4300,
      Abiertos: 4300 / 2,
      
    },
  ];

export default function Chart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Creados" stroke="Green" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Cerrados" stroke="Blue" />
          <Line type="monotone" dataKey="Abiertos" stroke="#829dca" />
        </LineChart>
      </ResponsiveContainer>
  )
}
