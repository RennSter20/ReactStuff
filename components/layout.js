import NavBar from "./navbar";
import { Paper } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import Container from '@mui/material/Container';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";




export default function Layout({ children }) {

  return (
    <>   
    <Box sx={{minHeight:{md:'95vh', xs:'98vh'}}}>
      <NavBar sx={{color: "secondary.main"}}></NavBar>
      <main>{children}</main>
    </Box>
    </>
  )
}

