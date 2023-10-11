// OUTLET
import {Outlet} from "react-router-dom";

// NAVBAR
import Navbar from "./Navbar.jsx";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default Layout;