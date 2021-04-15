import React,{useState,useEffect} from "react"
import {Card,Button,Form,Modal} from "react-bootstrap"
import CustomerTable from "./CustomerTable"
import CustomerModal from "./CustomerModal"
import {connect} from "react-redux"
import {fetchCustomersAction} from "../../Redux/actionCreator"

const CustomerView = (props) => {
  console.log(props)
  const [filter, setFilter] = useState("");
  const [customer, setCustomer] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const newCustomer = () => {
    setCustomer({name:"",lastname:"",email:"",number:""})
    handleShow()
  }
  const editCustomer = (customer) =>{ 
    setCustomer(customer)
    handleShow()
  }
  const display  = props.customers.filter(x=> (x.number.includes(filter) || x.email.toLowerCase().includes(filter)))
  
  useEffect(()=>{
    props.fetchCustomers()
  },[])

  return (
    <div>
      <Card>
        <Card.Header>
          <div className="d-flex justify-content-between">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" value={filter} onChange={(e)=>setFilter(e.target.value.toLowerCase())} placeholder=" filter by phone or email" />
              </Form.Group>
            </Form>
            <Button variant="primary" className="mb-2" onClick={newCustomer}>
              <strong>New Patient </strong>
              <span className="material-icons">person_add</span>
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <CustomerTable customers={display} editCustomer={editCustomer}/>
        </Card.Body>
      </Card>
      <CustomerModal show={show} handleClose={handleClose} setCustomer={setCustomer} customer={customer}/>
    </div>
  )
}


const msp = state => {
  return{
    customers: state.customers
  }
}

const mdp = dispatch => {
 return{
   fetchCustomers:()=>dispatch(fetchCustomersAction())
 }
}
export default connect(msp,mdp)(CustomerView)
