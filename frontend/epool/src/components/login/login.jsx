import React, { Component } from 'react';
import {withCookies} from 'react-cookie';


class Login extends Component {
    state = { 
        credentials:{
            username: '',
            password: ''
        }
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
                this.props.cookies.set('mr-token', res.token);
                window.location.href="/rides";
            })
                .catch(error => console.log(error))
                
     }
    render() { 
        return ( 
            <div>
                <input type="text" name="username" value={this.state.credentials.username} onChange={this.inputChanged}></input><br></br>
                <input type="password" name="password" value={this.state.credentials.password} onChange={this.inputChanged}></input><br></br>
                <button onClick={this.login}>Login</button>
            </div>
         );
    }
}
 
export default withCookies(Login);