import React from 'react'
import Layout from './Layout/Layout'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import Insert from './Components/Insert'
import Search from './Components/Search'
import Display from './Components/Display'
import Update from './Components/Update'
import Product from '../src/Components/Product';

const App = () => {
  return (
    <>
    
   <BrowserRouter> 
     <Routes>

         <Route path='/' element={<Layout/>}>
         <Route path='/Home' element={<Home/>} />
         <Route path='/Insert' element={<Insert/>} />
         <Route path='/Product' element={<Product/>} />
         <Route path='/Display' element={<Display/>} />
         <Route path='/Search' element={<Search/>} />
         <Route path='/Update' element={<Update/>}/>

      </Route>
     </Routes>
   
   </BrowserRouter>
    </>
  )
}

export default App
