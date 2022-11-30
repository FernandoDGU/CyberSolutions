import { Grid, Paper, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { reformatDate } from '../../Utils/DateManagement';

export default function TicketData(props) {
    const navigate = useNavigate();
    const [color, setColor] = useState("")
    const navigateURL = url => () => {
        navigate(url)
    }

    useEffect(()=>{
        if(props.reporte.state === "cerrado")
            setColor("blue")
        else
            setColor("red")
    }, [])

  return (
    <Fragment>
        <Typography variant="subtitle2" gutterBottom>
            {reformatDate(props.reporte.startDate)}
        </Typography>
        <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center"
        my={4}
        >
            <Grid item width={"100%"}>
            <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor:'#F9F9F9'
                  }}
                >
                 <a onClick={navigateURL('/perfil?id=' + props.reporte._user._id)} href='javascript:void(0)'>
                    <Typography variant='h5' textAlign={"center"}>
                        {props.reporte._user.name}
                    </Typography>
                </a>

                <Typography variant='subtitle1' textAlign={"center"} mt={1}>
                        {props.reporte._user.email}
                </Typography>

                <Typography variant='subtitle2' textAlign={"center"} mt={1}>
                        {props.reporte._user.phoneNumber}
                </Typography>
                </Paper>
                

                
                
            </Grid>
        </Grid>
        <Typography variant="subtitle1" gutterBottom mb={2}>
            Estado del ticket: <Typography color={color}> {props.reporte.state} </Typography>
        </Typography>

        <Typography variant="subtitle1" gutterBottom mb={2}>
            Número de comentarios: <Typography> {props.numComentarios} </Typography>
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
            Categoria: <Typography> {props.reporte._category.name} </Typography>
        </Typography>
    </Fragment>
  )
}
