import './squareIconLink.css';
import { Link } from "react-router";

function SquareIconLink({children, to}) {
    return (
        <div className="square"><Link to={to} className='square-icon'>{children}</Link></div>
    )
}

export default SquareIconLink;