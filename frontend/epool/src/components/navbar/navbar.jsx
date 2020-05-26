import React, { Component } from 'react';
import './navbar.css';
var FontAwesome = require('react-fontawesome');

class Navbar extends Component {
    state = { 
        
     }

    clickedFunction = evt =>{
        
        window.location.href = `/${evt.target.name}`;
    }
    render() { 
        return ( 
            <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
                        <a className="navbar-brand pl-4" id="nbrand">ePool</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto mr-auto">
                                <li className={this.props.clicked === "home" ? "active nav-item" : "nav-item"}>
                                    <a className="nav-link" name="home" onClick={this.clickedFunction}>Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className={this.props.clicked === "rides" ? "active nav-item" : "nav-item"}>
                                    <a className="nav-link" name="rides" onClick={this.clickedFunction}>Rides</a>
                                </li>
                                <li className={this.props.clicked === "offer" ? "active nav-item" : "nav-item"}>
                                    <a className="nav-link" name="offer" onClick={this.clickedFunction}>Offer</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav mr-auto ml-auto">
                                <li class="nav-item dropdown">
                                    <a class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <FontAwesome name="caret-square-down"/>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" name="my-pending-requests" onClick={this.clickedFunction}> My Pending Requests</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
        
                                    </div>
                                </li>
                            </ul>
                            
                        </div>
                    </nav>
                    
            </div>
         );
    }
}
 
export default Navbar;