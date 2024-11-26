import './App.css'
import Banner from './components/Banner';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <div className='body'>
      <Banner />
      <Home />
      <About />
      <Footer />
    </div>    
  );
}

export default App;
