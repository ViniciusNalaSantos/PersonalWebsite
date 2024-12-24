import './standardButton.css';
import Button from 'react-bootstrap/Button';


function StandardButton({children, to}) {
    return (        
        <Button variant="primary" href={to} className='standard-button' type='reset'>{children}</Button>
    )
}

export default StandardButton;