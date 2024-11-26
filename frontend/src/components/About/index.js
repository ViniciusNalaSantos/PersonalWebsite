import "./about.css"
import AboutImage from "../../assets/jpg/about_pic.jpg"

function About() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada ut odio bibendum posuere. Etiam varius fermentum enim, nec aliquet ipsum sodales ac. Praesent porttitor, dolor sed fermentum commodo, sapien odio tristique tellus, id condimentum nunc lorem eu enim. Proin ut eros ullamcorper, fermentum arcu suscipit, auctor orci. Proin et rutrum ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tortor diam, ultrices a placerat in, mollis ut est. Sed varius feugiat ultrices. Quisque id tincidunt dolor."
    const textContinuation = "Fusce sollicitudin tellus molestie enim gravida, at egestas dui ultrices. Nunc gravida tempus felis eget fermentum. Praesent scelerisque est sit amet fermentum ornare. Duis sollicitudin iaculis malesuada. Praesent lacus augue, laoreet vel suscipit et, dignissim non nulla. Nullam a velit nisl. Vestibulum non est condimentum purus semper fringilla ac sit amet dolor. Integer id elit urna. Nam quis rhoncus ipsum. Etiam auctor sapien mollis, porta magna a, tempus lectus. Sed nec ipsum lacinia, rhoncus mauris in, dapibus nisl. Nam quam ipsum, laoreet eu orci non, accumsan vehicula eros."

  return (
    <div className="about">
        <div className="about-main">
            <h1>Então, quem sou eu?</h1>
            <section>{text}<br /><br />{textContinuation}</section>
            <button>CONTATO</button>
        </div>
        <img src={AboutImage} alt="Men seated on a chair" className="about-image"></img>
    </div>
  )
}

export default About