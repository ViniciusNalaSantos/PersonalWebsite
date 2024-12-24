import './mediaCard.css';
import {FaLinkedinIn} from "react-icons/fa";


function MediaCard({children, text, href}) {
  return (
    <div className="media-card">
        <div className='media-card-icon'>{children}</div>
        <div className="media-card-text" >
            <span>{text}</span>
            <a className="media-card-text-link" href={href}>{href}</a>                    
        </div>
    </div>
  )
}

export default MediaCard;