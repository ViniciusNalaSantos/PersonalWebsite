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
          <LiaGlobeAmericasSolid size={'22'} />
          <div className="banner-select-language-button">                    
            <button className="banner-select-language-button-text">
              PORTUGUÊS
              <FaChevronDown className="banner-select-language-button-chevron" />
            </button>
          </div>
        </div>
    </header>
  )
}

export default Banner