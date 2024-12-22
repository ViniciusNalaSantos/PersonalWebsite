import './squareIconLink.css';

function SquareIconLink({children, to}) {
    return (
        <div className="square"><a href={to} className='square-icon'>{children}</a></div>
    )
}

export default SquareIconLink;