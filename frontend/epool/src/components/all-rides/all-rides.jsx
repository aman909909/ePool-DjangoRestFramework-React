import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import './all-rides.css';
import RidesBlock from '../rides-block/rides-block'
import RequestForm from '../request-form/request-form'

var FontAwesome = require('react-fontawesome');

class AllRides extends Component {
    state = { 
        offers: [],
        reqIs : null,
     }

     componentDidMount(){
        fetch('http://127.0.0.1:8000/offer/', {
            method: 'GET',
            headers: {
              'Authorization': `Token 99a6fdeba117420ed374a118a522b5dabc454f4b`
            }
          }).then( resp => resp.json())
          .then( res => this.setState({offers: res})).then(res => console.log(res))
          .catch( error => console.log(error))
     }
     changeReq = off =>{
         console.log(off);
         this.setState({reqIs: off});
     }
     cancelClicked = () =>{
         this.setState({reqIs: null});
     }
    render() { 
        return ( 
            <div>
                <Navbar clicked="rides"/>
                <div className="row">
                    <div className="col-9">
                        {this.state.offers.map(offer =>{
                            return <div key={offer.id}><RidesBlock offer={offer} changeReq={this.changeReq} button={1}/></div>
                        })}
                    </div>
                    <div className="col-3">
                        <div className="sti">{this.state.reqIs ? <RequestForm  offer={this.state.reqIs} cancelClicked={this.cancelClicked}/>: null}</div>
                    </div>

                </div>

            </div>
         );
    }
}
 
export default AllRides;