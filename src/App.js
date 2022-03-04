import React from "react";
import { Switch, Route } from "react-router-dom";


//componets
import FormIngreso from "./components/Ingresos/FormIngreso";
import Header from "./components/Header";
import LoginForm from "./components/LogIn/FormLogin";
import HomePage from "./Pages/HomePage";
 
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: localStorage.getItem('currentUser'),
      auth: localStorage.getItem('auth') // props
    };
  }


render() {
  return (
    <div>
       {/*Pattern design: Render Props */}
      <Header currentUser={this.state.currentUser}   />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/formingreso" component={FormIngreso} />
      </Switch>
      
      
 
      
    </div>
  );
}  
}

export default App;
