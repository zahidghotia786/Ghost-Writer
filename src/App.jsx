import Contact from './components/Contact'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Policy from './components/Policy'
import Terms from './components/Terms'
import AboutUs from './components/AboutUs'
import ServiceBlock from './components/ServiceBlock'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/contact' element={ <Contact />}/>
          <Route path='/policy' element={<Policy />}/>
          <Route path='/terms' element={<Terms />}/>
          <Route path='/about' element={<AboutUs />}/>
          <Route path='/serviceblock' element={<ServiceBlock />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
