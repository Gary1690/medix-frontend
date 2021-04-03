import React from "react"
import {Table,Button} from "react-bootstrap"
import ToolTipHover from "../Utility/ToolTipHover"

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

const CustomerTableRow = (props) => {
  const {row,editCustomer} = props
  const {name,lastname,email,number} = props.customer
   
  return (
    <tr>
      <th>{row}</th>
      <th>{name}</th>
      <th>{lastname}</th>
      <th>{email}</th>
      <th>{number}</th>
      <th>
        <ToolTipHover placement="top" text="Update">
          <Button variant="outline-primary" onClick={()=>editCustomer(props.customer)}>
            <span className="material-icons">update</span>
          </Button>
        </ToolTipHover>{' '}
        <ToolTipHover placement="top" text="Appointment">
          <Button variant="outline-secondary">
            <span className="material-icons">event_available</span>
          </Button>
        </ToolTipHover>{' '}
        <ToolTipHover placement="top" text="Medical History">
          <Button variant="outline-info">
            <span className="material-icons">description</span>
          </Button>
        </ToolTipHover>{' '}
        <ToolTipHover placement="top" text="Delete">
          <Button variant="outline-danger">
            <span className="material-icons">delete</span>
          </Button>
        </ToolTipHover>
      </th>
    </tr>
  )
}

export default CustomerTable