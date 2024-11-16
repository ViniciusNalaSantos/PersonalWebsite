import './footer.css'

function Footer() {
    const text = 'Lorem ipsum dolor sit amet. Vel animi repudiandae et quos deleniti a unde quia. In aliquam eius hic illum blanditiis.'

  return (
    <footer className='footer'>
        <h1 className='footer-title'>VINÍCIUS NALA</h1>
        <section className='footer-text'>{text}</section>
        <aside>
            <h1>MÍDIAS</h1>
        </aside>
        <hr className='line' />
        <small>
            @ Copyright 2024. Made by <a href='https://www.linkedin.com/in/viniciusnala/'>Vinícius Nala</a>
            </small>
    </footer>
  )
}

export default Footer