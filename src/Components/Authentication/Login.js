import {Form,Button} from "react-bootstrap"
import React, {useState} from "react"
import {connect} from "react-redux"
import {authenticateAction} from "../../Redux/actionCreator"
const Login = ({authenticate,history}) => {
  
  const [state,setState] = useState({email:"",password:""})
  const{email,password} = state
  
  const changeHandler = (e) => {setState({...state,[e.target.name]:e.target.value})}
  const submitHandler = (e) => {
    e.preventDefault()
    authenticate(email,password,history)
  }
  return (
    <div className="login-wrapper">
      <div style={{margin:"auto",verticalAlign:""}}>
        <h1 className="text-center">Login</h1>
        <div className="login">
          <Form  onSubmit={submitHandler}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email"
                value={email}  
                name="email"
                onChange={changeHandler} 
                required
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password"
                name="password"
                value={password}
                onChange={changeHandler} 
                required
                />
            </Form.Group>
            <Button 
              type="submit"
              variant="primary">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

const mdp = (dispatch)=>{
  return{
    authenticate: (email,password,history) => dispatch(authenticateAction({email,password},history))
  }
}

export default connect(null,mdp) (Login)
