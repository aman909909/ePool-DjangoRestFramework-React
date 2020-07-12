import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import FontAwesome from 'react-fontawesome';
import './my-pending-request.css'
import RidesBlock from '../rides-block/rides-block';
import {withCookies} from 'react-cookie';
class MyPendingRequest extends Component {
    state = {  
        req : [],
        showDetail: null,
        token: this.props.cookies.get('mr-token'),
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/pending-requests/', {
            method: 'GET',
            headers: {
              'Authorization': `Token ${this.state.token}`
            }
          }).then( resp => resp.json())
          .then( res => this.setState({req: res})).then(res => console.log(res))
          .catch( error => console.log(error))
     }

     delClicked = (r) =>{
         console.log(r);
         const reqNew = this.state.req.filter( rr => rr.id !== r.id);

        fetch(`http://127.0.0.1:8000/pending-requests/${r.id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
              'Authorization': `Token ${this.state.token}`
            }
          }).then( resp => resp.json())
          .catch( error => console.log(error))

          this.setState({req: reqNew, showDetail:null});
     };

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

     okClicked = r =>{
         //console.log(r.request_id);
        fetch(`http://127.0.0.1:8000/ur-for-you/`,{
            method : 'POST',
            headers: {'Content-Type' : 'application/json',
            'Authorization': `Token ${this.state.token}`
            },
            body: JSON.stringify({
                'req_id': r.request_id,
                'req_by': r.request_from,
                'seats': r.seatsReq,
            })
        }).then(resp => resp.json())
            .then(res=> console.log(res)).then(resp => this.delClicked(r))
                .catch(error =>console.log(error))
     }

    render() { 
        return ( 
            <div>
                <Navbar/>
                <h3 className="text-center mt-5">Requests for Approval</h3>
                <div className="container mt-5">
                    
                    {this.state.req.map(r => {
                        return (
                            <div key={r.id} className="d-flex justify-content-around">
                                <span onClick={() => this.clickedDetail(r.request_id)}>Request ID: {r.request_id}  <span className="clickForDetail">
                                    (Click for details)</span></span>
                                <span >Seats Required: {r.seatsReq}</span>
                                <span>
                                    <FontAwesome name="trash" onClick={() => this.delClicked(r)}/>  
                                    <FontAwesome name="check-circle" onClick={() => this.okClicked(r)}/>
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
 
export default withCookies(MyPendingRequest);