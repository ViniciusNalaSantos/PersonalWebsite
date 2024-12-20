import './App.css'
import Banner from './components/Banner';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ProjectPost from './components/ProjectPost';
import { HashRouter, Routes, Route, BrowserRouter } from "react-router";


function App() {
  return (
    <div className='body'>      
      <BrowserRouter>
        <Banner />  
        <Routes>
          <Route path='/' element={ <div><Home /><About /><Contact /><Projects /></div> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/projects' element={ <Projects /> } />
          <Route path='/projects/:id' element={ <ProjectPost /> } />          
          <Route path='*' element={<div>Página não encontrada</div>} />          
        </Routes>
        <Footer />
      </BrowserRouter>      
    </div>   
  );
}

export default App;
