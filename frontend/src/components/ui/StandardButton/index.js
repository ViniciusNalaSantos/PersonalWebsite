import './standardButton.css';
import Button from 'react-bootstrap/Button';


function StandardButton({children, to}) {
    return (        
        <Button variant="primary" className='standard-button'>{children}</Button>        
    )
}

export default StandardButton;