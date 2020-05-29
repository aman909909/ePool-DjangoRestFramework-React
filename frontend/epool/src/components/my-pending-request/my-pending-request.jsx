import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import FontAwesome from 'react-fontawesome';
import './my-pending-request.css'
import RidesBlock from '../rides-block/rides-block';

class MyPendingRequest extends Component {
    state = {  
        req : [],
        showDetail: null,
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/pending-requests/', {
            method: 'GET',
            headers: {
              'Authorization': `Token 99a6fdeba117420ed374a118a522b5dabc454f4b`
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
              'Authorization': `Token 99a6fdeba117420ed374a118a522b5dabc454f4b`
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
              'Authorization': `Token 99a6fdeba117420ed374a118a522b5dabc454f4b`
            }
          }).then( resp => resp.json()).then(res => this.setState({showDetail: res}))
          .catch( error => console.log(error))
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
                                    <FontAwesome name="check-circle"/>
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
 
export default MyPendingRequest;