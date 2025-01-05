import './banner.css';
import { LiaGlobeAmericasSolid } from 'react-icons/lia';
import BannerLink from '../../components/BannerLink';
import BannerDropDown from '../../components/ui/BannerDropDown'

function Banner() {
  return (          
    <header className="banner">
        <nav className="banner-navigations">            
            <BannerLink className="banner-navigations-home" to="/home" >INÍCIO</BannerLink>
            <BannerLink className="banner-navigations-about" to="/about" >SOBRE</BannerLink>
            <BannerLink className="banner-navigations-projects" to="/projects" >PROJETOS</BannerLink>
            <BannerLink className="banner-navigations-contact" to="/contact" >CONTATO</BannerLink>
        </nav>
        <div className="banner-select-language">
          <LiaGlobeAmericasSolid size={'24'} />                 
          <BannerDropDown></BannerDropDown>
        </div>
    </header>
  )
}

export default Banner