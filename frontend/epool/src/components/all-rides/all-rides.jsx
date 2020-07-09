import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import './all-rides.css';
import RidesBlock from '../rides-block/rides-block'
import RequestForm from '../request-form/request-form'
import ReactNotification from 'react-notifications-component'
import {store} from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import {withCookies} from 'react-cookie';
var FontAwesome = require('react-fontawesome');

class AllRides extends Component {
    state = { 
        offers: [],
        reqIs : null,
        token: this.props.cookies.get('mr-token'),
     }

     componentDidMount(){

        fetch('http://127.0.0.1:8000/offer/', {
            method: 'GET',
            headers: {
              'Authorization': `Token ${this.state.token}`
            }
          }).then( resp => resp.json())
          .then( res => this.setState({offers: res}))
          .catch( error => console.log(error))
     }
     changeReq = off =>{
         
         this.setState({reqIs: off});
     }
     cancelClicked = () =>{
         this.setState({reqIs: null});
     }

     justFun = val =>{
        
        let typ ='';
        if(val['message']=='909'){
            typ='success';
        } else typ='danger';

        let msg ='';

        if(val['message']=='909'){
            msg='Your request has been sent';
        } else if(val['message']=='808'){
            msg='You have already placed a request for this ride!';
        } else if(val['message']=='707'){
            msg= 'Why do you want to select your offer?';
        } else if(val['message']=='505'){
            msg= 'Less seats available!'
        }

        let tit = '';
        if(val['message']=='909'){
            tit = 'Yayyy';
        } else{
            tit = 'Ooops';
        }
        store.addNotification({
          title: `${tit}`,
          message: `${msg}`,
          type: `${typ}`,
          container: "top-right",
          dismiss: {
              duration: 4000,
              showIcon: true
          },
          
        })
        
      }
    render() { 
        return ( 
            <div>
                <ReactNotification/>
                <Navbar clicked="rides"/>
                <div className="row">
                    <div className="col-9">
                        {this.state.offers.map(offer =>{
                            return <div key={offer.id}><RidesBlock offer={offer} changeReq={this.changeReq} button={1}/></div>
                        })}
                    </div>
                    <div className="col-3">
                        <div className="sti">{this.state.reqIs ? <RequestForm  offer={this.state.reqIs} cancelClicked={this.cancelClicked} justFun={this.justFun} token={this.state.token}/>: null}</div>
                    </div>

                </div>

            </div>
         );
    }
}
 
export default withCookies(AllRides);