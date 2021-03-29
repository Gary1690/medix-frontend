import React, {useState} from "react";
import { Container } from "react-bootstrap";


const Layout = (props) => {

  const [hideSibar,setHideSibar] = useState(false)
  return (
    <div className="wrapper">
      <Sidebar hideSibar={hideSibar}></Sidebar>
      <div id="content">
        <Header setHideSibar={setHideSibar} hideSibar={hideSibar}></Header>
        <div className="m-5 p-3">
          <h2>Collapsible Sidebar Using Bootstrap 4</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>     
      </div>
    </div>
  )
}

const Header = ({setHideSibar,hideSibar})=>{
 return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <button type="button" onClick={()=>(setHideSibar(!hideSibar))}  className="btn btn-info">
          <i class="fas fa-align-left"></i>
          <span>Toggle Sidebar</span>
      </button>
    </div>
  </nav>
 )
}


const Sidebar = ({hideSibar}) => {

  return(
    <nav id="sidebar" className= {hideSibar?"active":""}>
        <div className="sidebar-header">
            <h3>MEDIX</h3>
        </div>

        <ul className="list-unstyled components">
            <p>Menu</p>
            <li className="active">
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/">Patients</a>
            </li>
            <li>
              <a href="/">Appointments</a> 
            </li> 
            <li>
              <a href="/">Profile</a> 
            </li>
        </ul>
    </nav>
  )
}

export default Layout
