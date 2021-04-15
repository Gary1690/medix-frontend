import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Components/Layout/Layout"
import CustomerView from './Components/Customer/CustomerView';
import Login from './Components/Authentication/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/customers"  exact render={(props)=>(<Layout><CustomerView {...props}/></Layout>)}/>
        <Route path="/login"  exact render={(props)=><Login {...props}/>}/>
      </Switch>
    </Router>
      
  )
}

export default App;
