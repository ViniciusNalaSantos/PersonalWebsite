import './formField.css';
import Form from 'react-bootstrap/Form';

function FormField({ children, as, rows }) {
  return (
      <Form.Group className="mb-3">                    
        <Form.Control placeholder={children} as={as} rows={rows} className='form-control'/>                    
      </Form.Group>
  )
}

export default FormField;