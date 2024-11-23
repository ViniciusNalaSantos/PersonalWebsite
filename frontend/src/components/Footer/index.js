import './footer.css'
import { FaHackerrank , FaGithub, FaLinkedinIn, FaMediumM, FaKaggle } from "react-icons/fa";

function Footer() {
    const text = 'Lorem ipsum dolor sit amet. Vel animi repudiandae et quos deleniti a unde quia. In aliquam eius hic illum blanditiis.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    const iconsSize = 28

  return (
    <footer className='footer'>
        <div className='footer-main'>
          <div className='footer-main-primary'>
            <h1 className='footer-main-primary-title'><b>VINÍCIUS NALA</b></h1>
            <section className='footer-main-primary-text'>{text}</section>
          </div>          
          <aside className='footer-main-aside'>
            <h1 className='footer-main-aside-title'>MÍDIAS</h1>
            <icon className='footer-main-aside-icons'>
              <a href='https://www.hackerrank.com/profile/vinicius_nala' className='footer-main-aside-icons-hackerrank'><FaHackerrank className='footer-main-aside-icons-hackerrank' /></a>
              <a href='https://github.com/ViniciusNalaSantos' className='footer-main-aside-icons-github'><FaGithub /></a>
              <a href='https://www.linkedin.com/in/viniciusnala/' className='footer-main-aside-icons-linkedln'><FaLinkedinIn /></a>
              <a href='https://medium.com/@viniciusnala' className='footer-main-aside-icons-medium'><FaMediumM /></a>
              <a href='https://www.kaggle.com/viniciusnalasantos' className='footer-main-aside-icons-kaggle'><FaKaggle /></a>
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