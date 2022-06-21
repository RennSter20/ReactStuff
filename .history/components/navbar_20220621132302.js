import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useUser } from '@auth0/nextjs-auth0';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/material';
import MenuItem from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Home', 'Rate'];

export default function NavBar() {
  const {user,error, isLoading} = useUser();

  if(isLoading) return <div>Loading...</div>;
  if(error) return <div>{error.message}</div>;

  const pages = ['Products', 'Pricing', 'Blog'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  
  const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  

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
          {pages.map((page) => {
            <MenuItem key={page}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {page}
          </Typography>
            </MenuItem>
          })}
          
            {user ? <Stack direction="row"><Button color="inherit" href="/api/auth/logout">Logout</Button>

<Avatar src={user.picture}></Avatar></Stack>:<Button color="inherit" href="/api/auth/login">Login</Button>}
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

}



