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
                            <ul className="navbar-nav">
                                <li className="text-light">
                                    <FontAwesome name="caret-square-down"/>
                                </li>
                            </ul>
                            
                        </div>
                    </nav>
                    
            </div>
         );
    }
}
 
export default Navbar;