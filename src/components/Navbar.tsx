import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <span className="navbar-brand">Employee Dashboard</span>
                <div className="navbar-nav ms-auto">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            `nav-link ${isActive ? 'active fw-bold' : ''}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/employee-form" 
                        className={({ isActive }) => 
                            `nav-link ${isActive ? 'active fw-bold' : ''}`
                        }
                    >
                        Employee Form
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;