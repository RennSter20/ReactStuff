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



export default function DeleteTest(props)
{
 

const postID = props.test._id;

const deleteTestFun = async () => {

  console.log(props.test.name)


}



    //{props.test._id}
    return(
      <div>
        <Button onClick={deleteTestFun}>
      Delete 
      </Button>
      </div>
    );
}