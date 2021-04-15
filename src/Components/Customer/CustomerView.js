import React,{useState,useEffect} from "react"
import {Card,Button,Form,Modal} from "react-bootstrap"
import CustomerTable from "./CustomerTable"
import CustomerModal from "./CustomerModal"


const CustomerView = () => {
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
  const display  = DummyData.filter(x=> (x.number.includes(filter) || x.email.toLowerCase().includes(filter)))
  
  useEffect(()=>{

  },[])

  return (
    <div>
      <Card>
        <Card.Header>
          <div className="d-flex justify-content-between">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" value={filter} onChange={(e)=>setFilter(e.target.value)} placeholder=" filter by phone or email" />
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

const DummyData = [
  {
    name: "John",
    lastname: "Allen",
    email: "john.t.allen@gmail.com",
    number: "999-999-9999",
  },
  {
    name: "Jorge",
    lastname: "Del Rosario",
    email: "jorge.k.delrosario@gmail.com",
    number: "999-999-1111",
  }
]

export default CustomerView
