import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './components/UserList'
import CategoryButtons from './components/CategoryButtons'
import SearchUsers from './components/SearchUsers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='flex justify-center items-center flex-col'>
    
   <UserList/>
   </div>
    </>
  )
}

export default App
