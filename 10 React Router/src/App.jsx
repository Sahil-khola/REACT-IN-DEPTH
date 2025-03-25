import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About' 
import Team from './component/Team'
import Contact from './component/Contact'
import Product from './component/Product'
import Course_Details from './component/Course_Details'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path='Team' element={<Team />}></Route>
          <Route path='Contact' element={<Contact />}></Route>
          <Route path='course' element={<Product />}></Route>
          <Route path='course/:id' element={<Course_Details />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
