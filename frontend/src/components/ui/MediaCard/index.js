import './mediaCard.css';
import Card from 'react-bootstrap/Card';


function MediaCard({children, text, href}) {
  return (
    <Card className='media-card'>
        <div className='media-card-icon'>{children}</div>
        <div className="media-card-text" >
            <span>{text}</span>
            <a className="media-card-text-link" href={href}>{href}</a>                    
        </div>
    </Card>
  )
}

export default MediaCard;