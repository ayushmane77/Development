import { useState } from 'react'
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'
import Headers from './components/Headers';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css'
import Avatar from './components/Avatar';
import OldBook from './components/OldBook';
import NewBook from './components/NewBook';
import Login from './components/Login';
import DashBoard from './components/DashBoard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <About/>
        <Contact/>
      </div> */}

      <BrowserRouter>
      <Headers/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/avatar/:id" element={<Avatar/>}/>
        <Route path='/book_type'>
          <Route path="oldbook" element={<OldBook/>}/>
          <Route path="newbook" element={<NewBook/>}/>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<DashBoard/>}></Route>

        
        
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
