import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
 
const paperStyle={padding :20,height:'50vh',width:280, margin:"20px auto"}
const avatarStyle={backgroundColor:'#1bbd7e'}
const btnstyle={margin:'8px 0'}

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }


  componentWillMount(){  console.log('dimonutn')}

    
  
 
  handleSubmit = (event) => {
    
    event.preventDefault();
    this.setState({ username: "", password: "" });
 
    //por ahora dejare una valor en el localStorage, luego consumire una API que valide esto con la BD
    localStorage.setItem('auth',true);
    localStorage.setItem('currentUser',this.state.username);

    //cambiar a hooks useHistory luego
    window.location = '/formingreso';
  
    
     

  };

  handleChange = (event) => {

    const { value, name } = event.target; // name, value

    this.setState({ [name]: value });
 
    
 
  };
 
  render() {
    return ( 
  
      <Grid>
        <Paper elevation={10} style={paperStyle}>

        <Grid align='center'>
                      <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                      <h2>Sign In</h2>
                  </Grid>
                  <TextField 
                    label='Username' 
                    placeholder='Enter username' 
                    value = { this.state.username }
                    onChange = { this.handleChange}
                    name="username"
                    fullWidth={ true } 
                    required ={ true }
                     
                        />
                  <TextField label='Password' 
                  placeholder='Enter password' 
                  type='password' 
                  fullWidth={ true } 
                  required ={ true }
                  name="password"
                  value = {this.state.password}
                  onChange = { this.handleChange}
                 
                  />
                  <FormControlLabel
                      control={
                      <Checkbox
                          name="checkedB"
                          color="primary"
                      />
                      }
                      label="Remember me"
                  />
                  <Button type='submit' color='primary' variant="contained" style={btnstyle} 
                    onClick={this.handleSubmit}  
                    fullWidth 
                    >
                    Sign in</Button>
                  <Typography >
                      <Link href="#" >
                          Forgot password ?
                  </Link>
                  </Typography>
                  
        </Paper>
      </Grid>
     
    )
  }
   
}

export default FormLogin