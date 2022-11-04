import { Grid, Paper, Typography } from '@mui/material'
import React, { Fragment } from 'react'

export default function Comment() {
  return (
    <Fragment >
        <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    marginY:5
                  }}
                >
                 <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center">
        <Grid item xs={6}>
        <Typography variant='h6'>
            Darien Sánchez
        </Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant='subtitle2' textAlign={"end"}>
            2022/10/23
        </Typography>
        </Grid>
        </Grid>
        
        <Typography m={1}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt eligendi, maxime natus eveniet aperiam esse nulla praesentium beatae blanditiis in aut ullam sed aspernatur sit temporibus tempora? Esse, aperiam! Ducimus.
        </Typography>
                </Paper>
        
    </Fragment>
  )
}
