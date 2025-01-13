import './notFound.css';
import { Link } from "react-router";


function NotFound() {
    return (
        <div className='not-found'>
            <h1 className='not-found-title'><b className='not-found-title-bold'>Desculpe</b>, não conseguimos encontrar esta página.</h1>
            <h2 className='not-found-subtitle'>Pesquise novamente ou volte para a <Link to='/home'>página inicial</Link>.</h2>
            <h3 className='not-found-error'>Error 404 - Page Not Found</h3>
        </div>
    )
}

export default NotFound;