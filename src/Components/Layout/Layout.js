import React, {useState} from "react";


const Layout = (props) => {

  const [hideSibar,setHideSibar] = useState(false)
  return (
    <div className="wrapper">
      <Sidebar hideSibar={hideSibar}></Sidebar>
      <div id="content" className="w-100">
        <Header setHideSibar={setHideSibar} hideSibar={hideSibar}></Header>
        <div className="m-5 p-3">
          {props.children}
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
          <i className="fas fa-align-left"></i>
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
