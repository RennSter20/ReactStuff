import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/dist/client/router';


export default function DeleteTest(props)
{
  const router = useRouter();

const postID = props.test._id;

const deleteTestFun = async () => {

  console.log(props.test.name)

  const res = await fetch('/api/'+ postID, {
    method: 'PATCH',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postID)
  });

  const data = await response.json()
  console.log(data)
}



    //{props.test._id}
    return(
        <Button onClick={deleteTestFun}>
      Delete 
      </Button>
    );
}