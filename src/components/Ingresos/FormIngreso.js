import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { TextField, Button, InputLabel, MenuItem,Select} from '@material-ui/core';
import { useState } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

//data JSON, luego consumir API

import { oficinas } from "../../data/oficinas";
 
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const paperStyle={padding :30,height:'50vh',width:800, margin:"20px auto"}
const FormIngreso = () => {

   
  const [datos, setDatos] = useState({
    nombre: '',
    rut:'',
    cta_sistema:'',
    cta_red:'' ,
    oficna:''

});
  

const handleChange = (event) => {
  
  setDatos({
    ...datos,
    [event.target.name]:event.target.value
  });
};


const [open, setOpen] = React.useState(false);


const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};

const SendData = (event) => {
  event.preventDefault();
  //consumir API en versi[on posterior]
  console.log('enviando datos...' + datos.nombre)
  setOpen(true);
  setDatos({
      nombre: '',
      rut:'',
      cta_sistema:'',
      cta_red:'' ,
      oficna:''
  });
  
 
}
 
   //const handleReset = () => set("");

  const listItems = oficinas.map((ofi) =>
      <MenuItem value= { ofi.cod }>{ ofi.nombre  }</MenuItem>
  
  )

  return (

    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
         Datos enviados con éxito!
        </Alert>
      </Snackbar>
    
    <Paper elevation={10} style={paperStyle}>
      <Grid container alignItems="flex-start" spacing={2}>
         <Grid item xs={12}>
         <h2>Formulario ingreso de cuentas de usuario</h2>
         </Grid>
        
        <Grid item xs={6}>
         
            <TextField
               onChange={handleChange} 
                name="nombre"
                value = {datos.nombre}
                label={"Nombre Usuario"}
                variant="outlined"
                fullWidth={ true } 
                required ={ true }
              />
        
        </Grid>

        <Grid item xs={6} sm={3}>
        
          <TextField
            label={"RUN Usuario"}
             name="rut"
             value = {datos.rut}
              
            onChange={handleChange} 
            variant="outlined"
            fullWidth={ true } 
            required ={ true }
          />
        
        </Grid>

        <Grid item xs={6}>
        
        <TextField
          label={"Cta. Active Directory"}
          variant="outlined"
          name="cta_red"
          value = {datos.cta_red}
          onChange={handleChange} 
        />
      
      </Grid>


      <Grid item xs={6}>
          <TextField
            label={"Cta. Sistema Registro"}
            variant="outlined" //optional
            onChange={handleChange} 
            value = {datos.cta_sistema}
            name="cta_sistema"
          />
      </Grid>

      <Grid item xs={6}>
      <InputLabel id="oficina">Oficina</InputLabel>
                      

                      <Select 
                      name="oficina"
                      variant="outlined"
                      label="Oficina"
                      labelId="oficina"
                      fullWidth={ true } 
                      onChange={handleChange}  
                      >
                      {listItems}
                     
                         

                      </Select> 
      </Grid>


      <Grid item xs={12} >
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
        onClick= {SendData}
      >
        Grabar
      </Button>
      &nbsp;
      <Button variant="contained" size="small"  color="secondary">
        Cancelar
      </Button>
        </Grid>
      </Grid>
      </Paper>

      </div>
   
  )
  
}

export default FormIngreso