import {
  BrowserRouter, Route, Routes
} from "react-router-dom";

import './App.css';
import Home from "./pages/Home";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
