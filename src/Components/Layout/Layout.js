import React from "react";
import { Container } from "react-bootstrap";
import Navbar from './Navigation'

const Layout = (props) => {
  return (
    <div>
      <Navbar/>
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Layout
