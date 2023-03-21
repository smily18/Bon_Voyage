import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import City from "./pages/City";
import About from "./pages/About";
import CityDetails from "./pages/CityDetails";
import BusDetails from "./pages/BusDetails";


export const URL =process.env.REACT_APP_URL;

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/city" element={<City />}></Route>
            <Route path="/city/:name" element={<CityDetails />}></Route>
            <Route path="/bus/:name" element={<BusDetails />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
