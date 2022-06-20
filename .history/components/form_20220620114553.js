import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/router';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';



function FormContext(props) {
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  //reload page
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  }
//
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



  const createTest = async (props) => {
    
   const res = await fetch('/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData), 
    });

    const data = await res.json();
    console.log(data);

    refreshData();
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
FormContext.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <FormContext
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}