import './App.css'
import Banner from './components/Banner';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  return (
    <div className='body'>
      <Banner />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>    
  );
}

export default App;
