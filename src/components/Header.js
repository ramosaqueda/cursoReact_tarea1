
import  AppBar   from '@material-ui/core/AppBar';
import  Toolbar  from '@material-ui/core/Toolbar';
import  Typography  from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
 

const Header = ({ currentUser }) => {
 
  const history = useHistory();
  
    
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      })); 
    
      const classes = useStyles();
      

  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Ingreso cuentas de usuario
        </Typography>
        {currentUser ? (
          <div>
             Bienvenido:&nbsp;{currentUser} 
           <Button color="inherit" onClick= {() => {
             localStorage.clear(); 
            //history.push('/')
             window.location = '/';
  
           }}>Logout</Button>
           </div>
        ) : (
          <Button color="inherit" href="/login">Login</Button>

        )}
      </Toolbar>
    </AppBar>
  </div>
);
  
}

export default Header