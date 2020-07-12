import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import RidesBlock from '../rides-block/rides-block';
import {withCookies} from 'react-cookie';

class Urfu extends Component {
    state = { 
        allr: [],
        token: this.props.cookies.get('mr-token'),
        showDetail: null,
     }

     clickedDetail = rId =>{
        fetch(`http://127.0.0.1:8000/offer/${rId}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              'Authorization': `Token ${this.state.token}`
            }
          }).then( resp => resp.json()).then(res => this.setState({showDetail: res}))
          .catch( error => console.log(error))
     }

     componentDidMount(){

        fetch('http://127.0.0.1:8000/ur-for-you/', {
            method: 'GET',
            headers: {
              'Authorization': `Token ${this.state.token}`
            }
          }).then( resp => resp.json())
          .then( resp => this.setState({allr: resp}))
          .catch( error => console.log(error))
          
          

     }
     render() { 
        return ( 
            <div>
                <Navbar/>
                <h3 className="text-center mt-5">Upcoming Rides</h3>
                <div className="container mt-5">
                    
                    {this.state.allr.map(r => {
                        return (
                            <div key={r.id} className="d-flex justify-content-around">
                                <span onClick={() => this.clickedDetail(r.ride_info)}>Ride ID: {r.ride_info}  <span className="clickForDetail">
                                    (Click for details)</span></span>
                                
                                <span>

                                </span>
                            </div>
                        );
                    })}
                </div>
                <hr/>
                <span className="mr-auto">
                    {this.state.showDetail ? <RidesBlock offer={this.state.showDetail}/> : null}    
                </span>
                
            </div>
         );
    }
}
 
export default withCookies(Urfu);