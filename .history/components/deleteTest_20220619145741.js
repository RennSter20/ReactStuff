import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';


export default function DeleteTest(props)
{
const id = props.test._id;

const deleteTest = async (props) => {
    console.log('trying to do something');
    const res = await fetch('/api/' + id, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(props.test), 
     });
 
     const data = await res.json();
     console.log(data);
   }
    

    //{props.postID}
    return(
        <Button onClick={() => deleteTest(test)}>
      Delete {props.test._id}
      </Button>
    );
}