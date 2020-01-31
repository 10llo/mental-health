import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Info from './Info';
import MyForm from './Form';
import './style.css';

function App() {
    return (
        <div>
            <nav className="navbar">
    <span className="navbar-toggle" id="js-navbar-toggle">
            <i className="fas fa-bars"></i>
        </span>
                <a href="#" className="logo">logo</a>
                <ul className="main-nav" id="js-menu">
                    <li>
                            <span><Link to={'/form'}> form </Link></span>
                    </li>
                    <li>
                        <a href="#" className="nav-links">Products</a>
                    </li>
                    <li>
                        <a href="#" className="nav-links">About Us</a>
                    </li>
                    <li>
                        <a href="#" className="nav-links">Contact Us</a>
                    </li>
                    <li>
                        <a href="#" className="nav-links">Blog</a>
                    </li>
                </ul>
            </nav>

            <div>
                <Switch>
                    <Route exact path="/form">
                        <MyForm/>
                    </Route>
                    <Route exact path="/info">
                        <Info/>
                    </Route>
                    <Route render={() => <div>Home</div>}/>
                </Switch>
            </div>

        </div>
    );
}

export default App;
