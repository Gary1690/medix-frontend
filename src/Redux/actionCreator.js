const HOST = "http://localhost:3000/";
const AUTHENTICATE = `${HOST}authenticate`;

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

export {
  authenticateAction
}