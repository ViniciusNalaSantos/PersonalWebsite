import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { FaChevronDown } from "react-icons/fa6";
import './banner.css';
import BannerLink from "../../components/BannerLink";

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
          <button className="banner-select-language-button">
            PORTUGUÊS
            <FaChevronDown className="banner-select-language-button-chevron" />
          </button>
        </div>
    </header>
  )
}

export default Banner