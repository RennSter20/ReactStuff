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

import connectMongo from '../utlis/connectMongo';
import Test from '../models/testModel';


export default function List({tests}) {


    return (
      <div>
        {tests.map(test => (
          <a key={test._id}>
            <p>{test.name} {test.email}</p>
          </a>
        ))}
      </div>
    );
  }
  
  export const getServerSideProps = async () => {
    try
      {
          console.log('CONNECTING TO MONGO');
  
          await connectMongo();
      
          console.log('CONNECTED TO MONGO');
          console.log('FETCHING DOCUMENTS');
  
          const tests = await Test.find();
  
          console.log('FETCHED DOCUMENTS');
      
          return {
            props:{
              tests: JSON.parse(JSON.stringify(tests))
            }
          }
      }
  catch(error)
  {
      console.log(error);
        return {
          notFound: true
        }
  }
  }