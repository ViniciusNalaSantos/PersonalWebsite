import { Link } from "react-router";
import "./bannerLink.css";

function BannerLink({children, to }) {
    return (
        <Link className={'banner-link'} 
                         to={to}>{children}</Link>
    )
}

export default BannerLink