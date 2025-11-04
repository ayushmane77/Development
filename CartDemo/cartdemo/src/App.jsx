// import { useState } from 'react'
// import Cart from './components/Cart';
// import './App.css'
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
// import { useEffect } from 'react';

// function App() {
//   const [user,SetUser] = useState([]);
 
//   useEffect(()=>{
//     getData();
//   },[]);

//   async function getData(){
//     let data = await fetch("https://api.github.com/users");
//     let res = await data.json();
//     SetUser(res);
//   }

//   return (
//     <>

//       <BrowserRouter></BrowserRouter>
//       <div>
//         <Cart User={user}/>
//       </div>
//     </>
//   )
// }

// export default App

// ----------------------------------------------------


import { useState } from 'react'

import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import './App.css'
import Search  from './components/Search'
import { User } from './components/User'
import Cart from "./components/Cart";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/search'>Search</Link>
      <Routes>
        <Route path='/' element={<User/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App



// conditional rendering
// props drilling
// states management
// axios and fetch
// useref and useState and useRef , useMemo and  useCallback, useContext

// what is reconcilation processs in react?
// zustard 
// form validation
// react life cycle - mounting and unmounting
// map , filter , reduce

// [5,6,[4,5],6,[5,0,9,88]] => []

  // ajacha topic mala samjla nay