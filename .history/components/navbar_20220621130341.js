import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useUser } from '@auth0/nextjs-auth0';
import Avatar from '@mui/material/Avatar';


export default function NavBar() {
  const {user,error, isLoading} = useUser();

  if(isLoading) return <div>Loading...</div>;
  if(error) return <div>{error.message}</div>;


  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          
            <Button color="inherit" href="/api/auth/login">Login</Button>

            <Avatar src={user.picture}></Avatar>

          
        </Toolbar>
      </AppBar>
    </Box>
  );
}