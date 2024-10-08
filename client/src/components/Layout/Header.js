import React from 'react';
import toast from 'react-hot-toast';
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from '../../context/auth';


const Header = () => {
    const [auth, setAuth] = useAuth();
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
        toast.success("Logout Successfully");

    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" ><FaShoppingCart /> ECOMMERCE : MOBISHOP APP</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/category"
                                    className="nav-link"
                                    href="#">Category</NavLink>
                            </li>
                            {
                                !auth.user ? (<>
                                    <li className="nav-item">
                                        <NavLink to="/register" className="nav-link" href="#">Register</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/login" className="nav-link" href="#">Login</NavLink>
                                    </li>
                                </>) : (<>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {auth?.user?.name}
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"
                                                    }`} className="dropdown-item">Dashboard</NavLink></li>
                                            <li><NavLink onClick={handleLogout} to="/login" className="nav-link">Logout
                                            </NavLink>
                                            </li>

                                        </ul>
                                    </li>


                                </>

                                )
                            }

                            <li className="nav-item">
                                <NavLink to="/cart" className="nav-link" href="#">Cart (0)</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Header;
