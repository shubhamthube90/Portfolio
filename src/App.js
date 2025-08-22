import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route , Navigate} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Skill from './Components/Skill';
import Contact from './Components/Contact';
import Education from './Components/Education'
import Qualification from './Components/Qualification';
import Signup from './Components/singup';
import Login from './Components/Login';
import Experience from './Components/Experience';
import NavbarComp from './Components/Navbar';

function App() {
  return (
   <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Parent route for Qualification */}
        <Route path="qualification" element={<Qualification />}>
          {/* Redirect /qualification to /qualification/education */}
          <Route index element={<Navigate to="education" replace />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Experience />} />
        </Route>

        <Route path="/skills" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;