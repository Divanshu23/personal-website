import './App.css';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import Particle from './components/Particle/Particle';
import ProjectList from './components/Projects/ProjectList/ProjectList';

function App() {
  return (
    <div className="App">
      <Particle />
      <Navbar />
      <div className='sections'>
        <Home />
        <Experience />
        <ProjectList />
        <Contact />
      </div>
    </div>
  );
}

export default App;
