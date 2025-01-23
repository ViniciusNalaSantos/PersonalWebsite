import './footer.css'
import { FaHackerrank , FaGithub, FaLinkedinIn, FaMediumM, FaKaggle } from "react-icons/fa";
import Text from '../../assets/json/texts.json';

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-main'>
          <div className='footer-main-primary'>
            <h2 className='footer-main-primary-title'><b>VINÍCIUS NALA</b></h2>
            <section className='footer-main-primary-text'>{Text.footerText}</section>
          </div>          
          <aside className='footer-main-aside'>
            <h2 className='footer-main-aside-title'>MÍDIAS</h2>
            <icon className='footer-main-aside-icons'>
              <a href='https://www.hackerrank.com/profile/vinicius_nala' className='footer-main-aside-icons-icon'><FaHackerrank /></a>
              <a href='https://github.com/ViniciusNalaSantos' className='footer-main-aside-icons-icon'><FaGithub /></a>
              <a href='https://www.linkedin.com/in/viniciusnala/' className='footer-main-aside-icons-icon'><FaLinkedinIn /></a>
              <a href='https://medium.com/@viniciusnala' className='footer-main-aside-icons-icon'><FaMediumM /></a>
              <a href='https://www.kaggle.com/viniciusnalasantos' className='footer-main-aside-icons-icon'><FaKaggle /></a>
            </icon>
          </aside>
        </div>
        <hr className='footer-line' />
        <small className='footer-copyright'>
          @ Copyright 2024. Made by <a href='https://www.linkedin.com/in/viniciusnala/' className='footer-copyright-link'>Vinícius Nala</a>
        </small>
    </footer>
  )
}

export default Footer