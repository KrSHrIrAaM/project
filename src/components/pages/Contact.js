import React from 'react'
import './Contact.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Contact() {
  return (
    <div className='center'>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Feedback" variant="outlined" />
    </Box>
    <br></br>
    <div className='col'>
    </div>
    </div>
  );
}