import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './Home';
import Forms from './Forms';
import Posts from './Posts';
import Profile from './Profile';
import PostDetail from './PostDetails';

class Routing extends Component{
    render()
    {
        return(
            <Router>
                <div>
                <header>
                        <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="/">KALVI</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                            <li className="active"><Link to="/"> HOME  </Link></li>                            
                            <li><Link to="/profile"> PROFILE  </Link></li>
                            <li><Link to="/posts"> POSTS  </Link></li>
                            <li><Link to="/forms"> FORMS </Link></li>
                            </ul>                            
                        </div>
                        </div>
                    </nav>                 
                </header>
                <Route exact path="/" component={Home}></Route>
                <Route path="/forms" component={Forms}></Route>
                <Route path="/posts" component={Posts}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/post/:id" component={PostDetail}></Route>
                </div>
            </Router>
        )
    }
}

export default Routing;