import { Link, useLocation } from "react-router";
import "./bannerLink.css";

function BannerLink({children, to }) {
    const location = useLocation();

    return (
        <Link className={`banner-link ${location.pathname === to ? 'banner-navigations-contrasted' : ""}`} 
                         to={to}>{children}</Link>
    )
}

export default BannerLink