import { Typography } from '@mui/material';
import React from 'react'

export default function Footer(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
          Sucursal: {props.sucursal}
        </Typography>
      );
}
