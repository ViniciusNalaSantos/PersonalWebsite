import { Link, useLocation } from "react-router";
import "./bannerLink.css";

function BannerLink({children, className, to }) {
    const location = useLocation();

    return (
        <Link className={`${className} ${location.pathname === to ? 'banner-navigations-contrasted' : ""}`} 
                         to={to}>{children}</Link>
    )
}

export default BannerLink