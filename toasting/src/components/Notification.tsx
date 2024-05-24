import React from 'react'
import { AiOutlineCheckCircle ,AiOutlineInfoCircle,AiOutlineWarning,AiOutlineCloseCircle, AiOutlineClose} from "react-icons/ai";
import './notification.css'
const iconsStyles={margin:'10px'}
const icons={
    success:<AiOutlineCheckCircle style={iconsStyles}/>,
    info:<AiOutlineInfoCircle style={iconsStyles}/>,
    warning:<AiOutlineWarning style={iconsStyles}/>,
    error:<AiOutlineCloseCircle style={iconsStyles}/>


}

const Notification = ({type="info",message,onClose}) => {
  return (
    <div className={`notification ${type}`}>
        {icons[type]}
        {message}

        <AiOutlineClose color='white' className='closeBtn' onClick={()=>onClose()}/>
    </div>
  )
}

export default Notification
