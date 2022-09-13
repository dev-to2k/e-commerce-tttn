import { BrowserRouter, Route, Routes } from 'react-router-dom'

import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Main from './pages/Home/components/Main'
import Products from './pages/Products'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Main />} />
          <Route path='products/men' element={<Products />} />
          <Route path='cart' element={<Cart />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />

          {/* <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
