import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { FaChevronDown } from "react-icons/fa6";
import './banner.css'

function Banner() {
  return (          
    <header className="banner">
        <nav className="banner-navigations">
            <a>INÍCIO</a>
            <a>SOBRE</a>
            <a>PROJETOS</a>
            <a>CONTATO</a>
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