import { useState } from 'react'

import './App.css'
import useNotification from './hooks/useNotification'
function App() {
const{NotificationComponent,trigerNotification}=useNotification("bottom-left")
  return (
    <>
    
    hey vibhaw 
    <button onClick={()=>trigerNotification({
      type:"success",
      message:"you succesfully loggedin",
      duration:3000
    })}>try success</button>
    hey vibhaw 
    <button onClick={()=>trigerNotification({
      type:"error",
      message:" login failed",
      duration:3000
    })}>try error</button>
    hey vibhaw 
    <button onClick={()=>trigerNotification({
      type:"info",
      message:"sent file",
      duration:3000
    })}>try info</button>
    hey vibhaw 
    <button onClick={()=>trigerNotification({
      type:"warning",
      message:"you got a warning",
      duration:3000
    })}>try warning</button>
    {NotificationComponent}
    </>
  )
}

export default App
