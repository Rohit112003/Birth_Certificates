import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import CheckWork from './pages/CheckWork'
import PanServices from './components/PanServices'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black min-h-screen'>


    <Navbar/> 
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/checkWork' element={<CheckWork/>}/>
    </Routes>
    <PanServices/>
      <Footer/>
    </div>
    
      
    
  )
}

export default App
