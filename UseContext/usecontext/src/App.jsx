import { useState,useContext, createContext } from 'react'

import './App.css'
import Child from './components/Child';

const data = createContext();
const data1= createContext();
function App() {
  const [count, setCount] = useState(0)
  let name = "ayush";
  let arr = [1,2,3,4,5];

  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={arr}>
          <Child/>
        </data1.Provider>
        
      </data.Provider>
    </>
  )
}

export default App
export {data};
export {data1};
