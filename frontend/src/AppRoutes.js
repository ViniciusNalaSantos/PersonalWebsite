import Banner from './layout/Banner';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './layout/Footer';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectPost from './components/ProjectPost'; 
import { HashRouter, Routes, Route, Navigate } from "react-router";

function AppRoutes() {
    return (
        <HashRouter>
            <Banner />  
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path='/home' element={ <div><Home /><About /><Contact /><Projects /></div> } />
                <Route path='/about' element={ <About /> } />
                <Route path='/contact' element={ <Contact /> } />
                <Route path='/projects' element={ <Projects /> } />
                <Route path='/projects/:id' element={ <ProjectPost /> } />          
                <Route path='*' element={<div>Página não encontrada</div>} />          
            </Routes>
            <Footer />
        </HashRouter>
    )
}

export default AppRoutes;