import React, { Component } from 'react';
import {withCookies} from 'react-cookie';
import './login.css';
import ReactNotification from 'react-notifications-component'
import {store} from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';


class Login extends Component {
    state = { 
        credentials:{
            username: '',
            password: ''
        },
        credText: '',
        
     }

     inputChanged = evt =>{
         let cred = this.state.credentials;
         cred[evt.target.name] = evt.target.value;
         this.setState ({credentials: cred});
     }

     login = () =>{
        fetch(`http://127.0.0.1:8000/auth/`,{
            method : 'POST',
            headers: {'Content-Type' : 'application/json',},
            body: JSON.stringify(this.state.credentials)
        }).then(resp => resp.json())
            .then(res=> {
                if(res.token != undefined){
                this.props.cookies.set('mr-token', res.token);
                window.location='/rides';
                } else{
                    console.log('erererer');
                    this.setState({credText: 'Oops! Wrong username or password!'});
                }
            })
                .catch(error =>console.log(error))
                
     }
    render() { 
        return ( 
            <div className="form-group">
                <div className="jumbotron bg-dark loginJumbo">
                    <label className="label">Username</label>
                    <input type="text" name="username" value={this.state.credentials.username} onChange={this.inputChanged} className="form-control"></input><br></br>
                    <label className="label">Password</label>
                    <input type="password" name="password" value={this.state.credentials.password} onChange={this.inputChanged} className="form-control"></input><br></br>
                    <button onClick={this.login} className="btn btn-success btn-md">Login</button>
                    <div id="credText" className="mt-4">
                        {this.state.credText}
                    </div>
                </div>

            </div>
         );
    }
}
 
export default withCookies(Login);