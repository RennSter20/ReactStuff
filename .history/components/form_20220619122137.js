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
    
  );
}
