import {OverlayTrigger,Tooltip} from "react-bootstrap"


const ToolTipHover = (props) => {
  const {placement,text} = props
  return (
    <OverlayTrigger
      placement={placement}
      overlay={
        <Tooltip id={`tooltip-${placement}`}>
            {text}
        </Tooltip>
      }
    >
      {props.children}
    </OverlayTrigger>
  )
}

export default ToolTipHover
