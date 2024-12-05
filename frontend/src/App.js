import './App.css'
import Banner from './components/Banner';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';


function App() {
  return (
    <div className='body'>
      <Banner />
      <Home />
      <About />
      <Contact />
      <Projects />
      <Footer />
    </div>    
  );
}

export default App;
