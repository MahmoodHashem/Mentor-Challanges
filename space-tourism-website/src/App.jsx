import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from "./pages/Home";
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from "./pages/Technology";
import Navbar from "./components/Navbar";

const App = () => {


  return (
    <div className="overflow-x-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;