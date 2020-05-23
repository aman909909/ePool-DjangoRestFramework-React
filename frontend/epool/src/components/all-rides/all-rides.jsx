import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import './all-rides.css';
import RidesBlock from '../rides-block/rides-block'


var FontAwesome = require('react-fontawesome');

class AllRides extends Component {
    state = { 
        offers: [],
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

    render() { 
        return ( 
            <div>
                <Navbar clicked="rides"/>
                {this.state.offers.map(offer =>{
                   return <RidesBlock offer={offer}/>
                })}
            </div>
         );
    }
}
 
export default AllRides;