import Hearder from './components/Hearder';
import './App.css'
import Home from './Page/Home';
import Shop from './Page/Shop';
import About from './Page/About';
import {  Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Contact from './Page/Contact';
import Cart from './Page/Cart';

import Register from './Page/Register';
import Login from './Page/Login';





function App() {


  return (
    <>

     <Hearder/>
    
     <Routes>
       
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Shop' element={<Shop/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      


     </Routes>
     <Footer/>
    
    </>
  )
}

export default App
