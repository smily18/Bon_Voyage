import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { useAuthContext } from "./hooks/useAuthContext";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import City from "./pages/City";
import About from "./pages/About";
import CityDetails from "./pages/CityDetails";
import BusDetails from "./pages/BusDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export const URL = process.env.REACT_APP_URL;

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <Router>
        <Container>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/city"
              element={user ? <City /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/city/:name"
              element={user ? <CityDetails /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/bus/:name"
              element={<BusDetails />}
            ></Route>
            <Route
              path="/about"
              element={user ? <About /> : <Navigate to="/login" />}
            ></Route>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
