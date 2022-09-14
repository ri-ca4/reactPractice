import React from "react";
import { Link, Outlet } from "react-router-dom";



const Layout = ()=> {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Page1</Link>
                    </li>
                    <li>
                        <Link to='/PageTwo'>Page2</Link>
                    </li>
                    <li>
                        <Link to='/PageThree'>Page3</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout;