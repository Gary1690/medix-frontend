import React from "react"
import {Table} from "react-bootstrap"
import CustomerTableRow from "./CustomerTableRow"
const CustomerTable = (props) => {
  const {editCustomer} = props

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {props.customers.map((x,k)=>(<CustomerTableRow editCustomer={editCustomer} key={k} row={k+1} customer={x}/>))}
      </tbody>
    </Table>
  )
}



export default CustomerTable