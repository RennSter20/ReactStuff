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
import connectMongo from '../utlis/connectMongo';
import Test from '../models/testModel';


export default function DeleteTest(props)
{
 

const postID = props.test._id;
const name = props.test.name;

const delete = () =>  {Test.findOneAndRemove({_id:props.test._id});}


    //{props.test._id}
    return(
      <div>
        <Butto onClick={}>
      Delete 
      </Button>
      </div>
    );
}