import React, { Component } from 'react';
import './request-form.css';
var FontAwesome = require('react-fontawesome');

class RequestForm extends Component {
    state = { 
        val: {
            'description': '',
            'seatsReq': '',
            'request_id': `${this.props.offer.id}`,  
        },
        
       
     }
     changed = evt =>{
         let cval = this.state.val;
         cval[`${evt.target['name']}`] = evt.target.value;
         this.setState({val: cval});
     }



     submitClicked = () =>{
        let cval = this.state.val;
        cval['request_id'] = this.props.offer.id;
        this.setState({val: cval});
        fetch('http://127.0.0.1:8000/pending-requests/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${this.props.token}`,
            },
            body: JSON.stringify(this.state.val)
            }).then( resp => resp.json()).then(res => this.props.justFun(res))
            .catch( error => console.log(error))
     }
    
     

    render() { 
        const isDisabled = this.state.val['description'].length===0 || this.state.val['seatsReq'].length===0;
        return ( 
            <div className="mr-5">
                <div className="container mt-5 jumbotron bg-dark text-light pt-4">
                        <h2 className="mb-5">{this.props.offer.destination1} <FontAwesome name="arrow-right"/> {this.props.offer.destination2}</h2>
                        <div className="form-group">
                                <label for="f1">Description</label>
                                <input type="text" className="form-control" id="f1" name="description" value={this.state.val['description']} onChange={this.changed}/>
                        </div>
                        <div className="form-group">
                                <label for="f1">Seats Required</label>
                                <input type="number" className="form-control" id="f1" name="seatsReq" value={this.state.val['seatsReq']} onChange={this.changed}/>
                        </div>
    
                        <button className="btn btn-success" onClick={this.submitClicked} disabled={isDisabled}>Submit</button>
                       
                        <button className="btn btn-warning ml-3" onClick={this.props.cancelClicked}>Cancel</button>
                       

                </div>

            </div>
         );
    }
}
 
export default RequestForm;