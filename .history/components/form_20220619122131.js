import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import connectMongo from '../utlis/connectMongo';
import Test from '../models/testModel';
export default function Form(props) {

const [formData, setFormData] = useState({
  name:"",
  email:""
})

const handleChange = (e) =>
{
  const {name, value} = e.target;
  setFormData({
    ...formData,
    [name]:value
  })
}






  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" name="name"
      variant="outlined" onChange={handleChange} value={formData.name}/>

      <TextField id="filled-basic" label="Filled" variant="filled" name="email" 
      onChange={handleChange} value={formData.email}
 />

      <Button onClick={createTest}>Click me!</Button>
    </Box>
  );
}