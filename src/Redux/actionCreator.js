const HOST = "http://localhost:3000/";
const AUTHENTICATE = `${HOST}authenticate`;
const CUSTOMERS= `${HOST}customers`;

const authenticateAction = (userInfo,history) => dispatch =>{
  fetch(AUTHENTICATE,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
    body:JSON.stringify(userInfo)
  }).then(r => r.json())
  .then(data =>{
    if(data.error){
      alert(data.error.user_authentication)
    }else{
      console.log(data)
      localStorage.setItem("token",data.token)
      dispatch({type:"LOGIN",payload:{user:data.user}})
      history.push("/customers")
    }
  })
}

const fetchCustomersAction = ( ) => dispatch =>{
  fetch(CUSTOMERS,{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json",
      "Authorization":localStorage.getItem("token")
    }
  })
  .then(r=>r.json())
  .then(data=>{
    dispatch({type:"FETCH_CUSTOMERS",payload:{customers:data}})
  })
}

const deleteCustomerAction = (id) => dispatch =>{
  fetch(`${CUSTOMERS}/${id}`,{
    method:"DELETE",
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json",
      "Authorization":localStorage.getItem("token")
    }
  }).then(r => r.json())
  .then(user => dispatch({type:"DELETE_CUSTOMER",payload:{id:user.id}}))
}
export {
  authenticateAction,
  fetchCustomersAction,
  deleteCustomerAction 
}