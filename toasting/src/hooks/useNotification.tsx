import { useCallback, useState } from "react"
import Notification from "../components/Notification";
const useNotification=(position='top-right')=>{
    const[notification,setNotification]=useState(null);
    let timer;
    const trigerNotification=useCallback((notificationProps)=>{
        clearTimeout(timer)
        setNotification(notificationProps)
        setTimeout(() => {
            setNotification(null);
        }, notificationProps.duration);
    },[])
    const NotificationComponent=notification?(
        <div className={`${position}`}>
            <Notification {...notification}/>
        </div>
    ):null

    return {NotificationComponent,trigerNotification}
}
export default useNotification;