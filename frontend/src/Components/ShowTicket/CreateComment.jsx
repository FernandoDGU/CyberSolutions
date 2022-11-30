import { Button, Grid, styled, TextField } from '@mui/material';
import React, { Fragment } from 'react'



export default function CreateComment() {
    const [value, setValue] = React.useState('');

    const handleComment = (event) => {
        setValue(event.target.value);
      };
  return (
    <Fragment>
        <Grid container justifyContent={"center"} alignItems={"center"} sx={{mt:5}}>
            <Grid item xs={10}>
            <TextField
          id="outlined-multiline-flexible"
          label="Escribe un comentario..."
          multiline
          maxRows={4}
          variant={"filled"}
          value={value}
          onChange={handleComment}
          fullWidth
        />
            </Grid>
            <Grid item xs={7} m={3}>
            <Button variant="contained" fullWidth>Comentar</Button>
        </Grid>
        </Grid>
        
        
    </Fragment>
  )
}
