import React, { Component } from 'react';
import Navbar from '../navbar/navbar'

class OfferForm extends Component {
    state = { 
        val : {
            'to':'',
            'from':'',
            'date':'',
            'time':'',
            'model': '',
            'seats': '',
            'cost': ''
        }
     }
     changed = evt =>{
         let cval = this.state.val;
         cval[`${evt.target['name']}`] = evt.target.value;
         this.setState({val: cval});
     }
     submitClicked = () =>{
        fetch('http://127.0.0.1:8000/offer/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token 99a6fdeba117420ed374a118a522b5dabc454f4b`,
            },
            body: JSON.stringify(this.state.val)
            }).then( resp => resp.json())
            .then( res => console.log(res))
            .catch( error => console.log(error))
     }
    render() { 
        return ( 
            <div>
                <Navbar clicked="offer"/>
                <div className="container mt-5 jumbotron">
                        <div className="form-group">
                                <label for="f1">From</label>
                                <input type="text" className="form-control" id="f1" name="from" value={this.state.val['from']} onChange={this.changed}/>
                        </div>
                        <div className="form-group">
                                <label for="f2">To</label>
                                <input type="text" className="form-control" id="f2" name="to" value={this.state.val['to']} onChange={this.changed}/>
                        </div>
                        <div className="form-group">
                                <label for="f3">Date of Journey</label>
                                <input type="date" className="form-control" id="f3" name="date" value={this.state.val['date']} onChange={this.changed}/>
                        </div>
                        <div className="form-group">
                                <label for="f4">Time</label>
                                <input type="time" className="form-control" id="f4" name="time" value={this.state.val['time']} onChange={this.changed}/>
                        </div>
                        <div className="form-group">
                                <label for="f5">Car Model</label>
                                <input type="text" className="form-control" id="f5" name="model" value={this.state.val['model']} onChange={this.changed}/>
                        </div>
                        <div className="form-group">
                                <label for="f6">Seats Available</label>
                                <input type="number" className="form-control" id="f6" name="seats" value={this.state.val['seats']} onChange={this.changed}/>
                        </div>
                        <div className="form-group">
                                <label for="f7">Cost per seat</label>
                                <input type="number" className="form-control" id="f7" name="cost" value={this.state.val['cost']} onChange={this.changed}/>
                        </div>

                        <button className="btn btn-secondary" onClick={this.submitClicked}>Submit</button>
                       

                </div>

            </div>
         );
    }
}
 
export default OfferForm;