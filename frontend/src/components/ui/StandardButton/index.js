import './standardButton.css';
import Button from 'react-bootstrap/Button';


function StandardButton({children, to, type, onClick}) {
    return (        
        <Button variant="primary" size="lg" href={to} onClick={onClick} className='standard-button' type={type}>{children}</Button>
    )
}

export default StandardButton;