import React from "react"
import {Button,Form,Modal} from "react-bootstrap"

const CustomerModal = (props)=>{
  const {show,handleClose,setCustomer} = props
  const {name,lastname,email,number} = props.customer

  const handleChange = (e) =>{
    setCustomer({...props.customer,[e.target.name]:e.target.value})
  }

  const handleKeyDown = (e) =>{
    let value = e.target.value
    if(e.key === "Backspace"){
      value = value.substring(0,value.length-1)
      setCustomer({...props.customer,[e.target.name]:value})
    }
    if (value.length >= 12){return}
    if(e.key >=0 && e.key <=9){
      value.length === 7 || value.length === 3 
      ? 
      setCustomer({...props.customer,[e.target.name]:value+'-'+e.key})
      :
      setCustomer({...props.customer,[e.target.name]:value+e.key})
    }
  }

  const saveChanges = (customer) =>{
    console.log(customer)
    handleClose()
  }

  return(
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{!!name ? "Update Patient":"Name Patient"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="name" value={name} onChange={handleChange} placeholder="first name" />
          </Form.Group>
          <Form.Group controlId="formBasicLastname">
            <Form.Label>Lastname</Form.Label>
            <Form.Control type="text" name="lastname" value={lastname} onChange={handleChange} placeholder="lastname" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" value={email} onChange={handleChange} placeholder="john.doe@gmeet.com" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" name="number" value={number} onKeyDown={handleKeyDown} placeholder="999-999-9999" maxLength={12}/>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={()=>saveChanges(props.customer)}>Save changes</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CustomerModal