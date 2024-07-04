
import './App.css'
import Shape from './components/Shape';


const BOX_DATA:number[][] = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
];
function App() {

  return (
    <>
     <div className=''>
     <Shape data={BOX_DATA}/>
     </div>
    </>
  )
}

export default App
