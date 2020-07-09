import React, { Component } from 'react';
import './rides-block.css';

var FontAwesome = require('react-fontawesome');

class RidesBlock extends Component {
    state = {  }
    render() { 
        return(
            <div key={this.props.offer.id}>
                
                    <div className="row ml-5 mt-5">
                        <div className="col-10 jumbotron p-3">
                            <div className="row mx-auto">
                                <div className="col-lg-7 col-12 my-auto">
                                    <h2 id="fromto"><FontAwesome name="compass"/> {this.props.offer.destination1} <FontAwesome name="arrow-right"/> {this.props.offer.destination2}</h2>
                                    <br/>
                                    
                                    <span className="time mt-5"> <FontAwesome name="clock"/>   {this.props.offer.time}</span>
                                    <br/>
                                    <span className="time"> <FontAwesome name="calendar-week"/>   {this.props.offer.date}</span>
                                    <br/>
                                    <span className="time"> <FontAwesome name="car"/>   {this.props.offer.carModel}</span>
                                    <br/>
                                    <span className="time"> <FontAwesome name="user"/>   {this.props.offer.usrname}</span>
                                    
                                </div>
                                <div className="col-lg-4 col-12 mt-5 bg-dark text-light ml-5 p-5 mx-auto" id="curve">
                                    <span className="time"> <FontAwesome name="rupee-sign"/>{this.props.offer.cost} <span id="cost2">/person</span></span>
                                    <br/>
                                    <span className="time mt-5">{this.props.offer.seatsAvailable} <span id="cost2">seats available</span></span>
                                    <br/>
                                    {this.props.button ?<button className="btn btn-info mt-5" onClick={() => this.props.changeReq(this.props.offer)}>Send a Request</button>
                                        : null}
                                </div>
                            </div>
                        </div>

                    

                </div>

            </div>
        );
    }
}
 
export default RidesBlock;