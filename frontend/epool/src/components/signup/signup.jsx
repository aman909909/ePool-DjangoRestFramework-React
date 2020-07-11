import React, { Component } from 'react';

class Signup extends Component {
    state = { 
        credentials:{
            username: '',
            password: '',
            email: '',
        },
        errorText:''
     }
     changeClicked= evt =>{
        
        let cred=this.state.credentials;
        cred[evt.target.name] = evt.target.value;
        this.setState({credentials: cred});
     }
     checkRes = res =>{
         if(res.id !== undefined){
             window.location="/";
         } else{
                this.setState({errorText: res.username});
         }
     }
     buttonClicked= () =>{
        fetch(`http://127.0.0.1:8000/user/`,{
            method : 'POST',
            headers: {'Content-Type' : 'application/json',},
            body: JSON.stringify(this.state.credentials)
        }).then(resp => resp.json())
            .then(res=> this.checkRes(res))
                .catch(error =>console.log(error))
     }
    render() { 
        return ( 
            <div className="jumbotron bg-dark loginJumbo">
                    <div className="form-group">
                        <label for="usernamee" className="label">Username</label>
                        <input type="text" className="form-control" id="usernamee" name="username"  placeholder="Enter username"
                          onChange={this.changeClicked} value={this.state.credentials.username}></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1" className="label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" placeholder="Enter email" 
                        onChange={this.changeClicked} value={this.state.credentials.email}></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1" className="label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="Password" 
                        onChange={this.changeClicked} value={this.state.credentials.password}></input>
                    </div>
                    <div id="credText" className="mt-4">
                        {this.state.errorText}
                    </div>
                    <button className="btn btn-primary" onClick={this.buttonClicked}>Submit</button>
            </div>
         );
    }
}
 
export default Signup;