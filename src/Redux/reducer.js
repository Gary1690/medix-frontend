const initialState = {
  user: null,
  customers: [
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
}


const reducer = (prevState=initialState,action)=>{
  console.log(action)
  switch(action.type){
    case"LOGIN": 
      return {...prevState, user:action.payload.user}
    case "FETCH_CUSTOMERS":
      return {...prevState, customers:action.payload.customers}
    case "DELETE_CUSTOMER":
      const newCusties = prevState.customers.filter(x => x.id != action.payload.id)
      return {...prevState, customers:newCusties}
    default:
      return prevState
  }
}

export default reducer;