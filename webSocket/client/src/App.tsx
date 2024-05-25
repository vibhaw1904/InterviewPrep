import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import './App.css'
const socket = io('http://localhost:3000');

function App() {
  const [message, setMessage] = useState('');
  const [messages,setMessages]=useState([]);


  useEffect(()=>{
    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    return()=>{
      socket.off('recievedMessage')
    };
  },[])

  const sendMessage=(e)=>{
      e.preventDefault();
    if(message.trim()){
      socket.emit('sendMessage',message);
      setMessage('');
    }
  }

  return (
    <>
  <div className='container'>
  <h1 className='heading'>     hey vibhaw send message
</h1>
     <div>
     <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} />
     <button onClick={sendMessage}>send</button>
     </div>
  </div>
  <div className='messages'>
   { 
   messages.map((msg,index)=>(
    <div key={index}>{msg}</div>
   ))}
  </div>
    </>
  )
}

export default App
