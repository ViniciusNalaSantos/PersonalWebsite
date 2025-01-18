import './banner.css';
import { LiaGlobeAmericasSolid } from 'react-icons/lia';
import { LuMenu } from "react-icons/lu";
import BannerLink from '../../components/BannerLink';
import BannerDropDown from '../../components/ui/BannerDropDown';
import SideBar from '../SideBar';

function showSideBar() {
  const sideBar = document.querySelector('.side-bar')
  sideBar.style.display = 'block'
}

function Banner() {
  return (
    <>
      <header className="banner">
        <nav className="banner-navigations">
          <LuMenu className='banner-navigations-menu' onClick={showSideBar}/>            
          <BannerLink to="/home" >INÍCIO</BannerLink>
          <BannerLink to="/about" >SOBRE</BannerLink>
          <BannerLink to="/projects" >PROJETOS</BannerLink>
          <BannerLink to="/contact" >CONTATO</BannerLink>
        </nav>
        <div className="banner-select-language">
          <LiaGlobeAmericasSolid />
          <BannerDropDown></BannerDropDown>
        </div>
      </header>
      <SideBar />
    </>
  )
}

export default Banner