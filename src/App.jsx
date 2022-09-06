import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Content from './pages/Home/components/Content'
import Product from './pages/Product'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Content />} />
          <Route path='products' element={<Product />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />

          {/* <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
