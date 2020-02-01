import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Info from './Info';
import MyForm from './Form';
import './style.css';

function App() {
    const NoMatch = () => {
        return (
            <h3>404 - Not found</h3>
        );
    };
    return (
        <div>
            <nav className="navbar">
                <Link to={'/'}> home </Link>
                <Link to={'/form'}> form </Link>
                <Link to={'/info'}> info </Link>
            </nav>
            <div className="content">
                <Switch>
                    <Route exact path="/"/>
                    <Route exact path="/form" component={MyForm}/>
                    <Route exact path="/info" component={Info}/>
                    <Route exact component={NoMatch}/>
                </Switch>
            </div>

        </div>
    );
}

export default App;
