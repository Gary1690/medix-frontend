import ToolTipHover from "../Utility/ToolTipHover"
import {Button} from "react-bootstrap"
import {connect} from "react-redux"
import {deleteCustomerAction} from "../../Redux/actionCreator"

const CustomerTableRow = (props) => {
  const {row,editCustomer} = props
  const {id,name,lastname,email,number} = props.customer

   
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
          <Button 
          variant="outline-danger"
          onClick={()=>props.deleteCustomer(id)}
          >
            <span className="material-icons">delete</span>
          </Button>
        </ToolTipHover>
      </th>
    </tr>
  )
}
const mdp = dispatch => {
  return{
    deleteCustomer:(id) => dispatch(deleteCustomerAction(id))
  }
}
export default connect(null,mdp)(CustomerTableRow)