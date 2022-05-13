import React, { Component } from "react";
import "../style/LoginStyle.css" 
import { ToastContainer, toast } from 'react-toastify';


class Form extends React.Component {
    constructor(props) {
      super(props);    
      
      this.state = {
            form: 'login',
            nameOfUser:"",
            email : "",
            passwordSignUp : "",
            passwordSignIn : "",
            passWord :"",
            regEmail : /\S+@\S+\.\S+/,
            regForName : /^[a-zA-Z]+(\s{1}[a-zA-Z]+)*$/,
            validName : "Valid Name",
            InvalidName : "Invalid Name, Not allowed to enter number or not allowed to be empty",
            validEmail : "Valid Email",
            InvalidEmail : "Invalid Email ",
            passWordMessage : "Please, enter the password ",
            passWordMessage2 : "Please, enter the password in the signUp form",

            userEmail : "",
            userPassword : "",
            fullName :"",
            emailStstus : false,
            passwordStstus : false,
            nameStstus : false,
            
          },

      this.toggle = {
        login: 'register',
        register: 'login'
      };
    }
    
    onSubmit(e) {
        if(this.state.form == "login"){
            let getEmailStatus = this.checkUserEmail(this.state.email);   // => valid email : error message
            let getPasswordStatus = this.checkUserPassword(this.state.passWord)
            if(getEmailStatus == true && getPasswordStatus == true ){
                this.setState({userEmail:this.state.email , userPassword : this.state.passWord})
                console.log("the login form is checked " , this.state.userEmail , "password" , this.state.userPassword)
            }else{
                console.log("setting value in LOGIN FORM is faild ")
            }
            
        }else{
            let getNameStatus = this.checkUserName(this.state.nameOfUser); 
            let getEmailStatus2 =this.checkUserEmail(this.state.email);
            let getPasswordStatus2 = this.checkUserPassword(this.state.passWord)
            if(getEmailStatus2 == true && getPasswordStatus2 == true && getNameStatus == true ){
                this.setState({userEmail:this.state.email , userPassword : this.state.passWord ,fullName : this.state.nameOfUser})
                console.log("the signUp form is checked ", this.state.email , "password" , this.state.passWord , this.state.nameOfUser)
            }else{
                console.log("setting value in REGISTER FORM is faild ")
            } 
        }
        this.emptyValue()
        e.preventDefault();
    }

    emptyValue = ()=> {
        this.setState({email :""})
        this.setState({passWord :""})
        this.setState({nameOfUser : ""})
    }
    SuccessDisplay = (errorData)=>{
        toast.success(`${errorData}`,
            {
            position:"top-center",
            theme:"colored",
            autoClose:5000,
            pauseOnHover: true,
            closeButton:true,
            hideProgressBar :true, 
        })
    }
    
    errorDisplay = (errorData)=>{
        toast.error(`${errorData}`,
            {
            position:"top-center",
            theme:"colored",
            autoClose:5000,
            pauseOnHover: true,
            closeButton:true,
            hideProgressBar :true, 
        })
    }

    checkUserName = (value)=> {
        if(value.match(this.state.regForName) && value !== ""){
            console.log("Valid Name")
            return true
            //this.setState({nameStstus : true})
        }
        else{
            this.errorDisplay(this.state.InvalidName)
            console.log("InValid Name")
            //this.setState({nameStstus : false})
            return false
        }
    }
    checkUserEmail = (value)=> {
        if(this.state.regEmail.test(value)){
            console.log(" Valid Email")
            // this.setState({emailStstus : true})
            return true
        }
        else{
            this.errorDisplay(this.state.InvalidEmail)
            // this.setState({emailStstus : false})
            console.log("inValid Email")
            return false   
        }
    }
    checkUserPassword = (value)=> {
        if(value == ""){
            this.errorDisplay(this.state.passWordMessage)
            // this.setState({passwordStstus : false})
            return false
        }else {
            console.log(" Valid password ")
            // this.setState({passwordStstus : true})
            return true
        }
    }

    getUserName = (e) => {
        this.setState({nameOfUser :e.target.value })
    }
    getUserPassword = (e) => {
        if(this.state.form == "login"){
            this.setState({passWord:e.target.value})
        }else{
            this.setState({passWord:e.target.value})
        }
    }
    getUserEmail = (e)=> {
        this.setState({email:e.target.value})
    }
    addingNewUser = ()=>{

    }
  
    render() {    
      return (
        <div className="container">
          <div style={{transform: `translate(${this.state.form === 'login' ? 0 : 250}px, 0px)`}} className="form-div">
            <form onSubmit={this.onSubmit.bind(this)}>
              <input placeholder="Email" type="text"  value={this.state.email} onChange = {this.getUserEmail.bind(this)}/>
              <input placeholder="Password" type="password"  value={this.state.passWord} onChange={this.getUserPassword.bind(this)}/>
              {this.state.form === 'login' ? '': <input placeholder="Name" type="text"  value={this.state.nameOfUser} onChange={this.getUserName.bind(this)}/>}
              <button className="button-primary">Submit</button>
            </form>
          </div>
          <div style={{transform: `translate(${this.state.form === 'login' ? 0 : -250}px, 0px)`}} className="button-div">
            <p>{this.state.form === 'login' ? 'Do not have an account?' : 'Already a member?'}</p>
            <button onClick={() => {this.setState({form: this.toggle[this.state.form]})}}>{this.toggle[this.state.form]}</button>
          </div>
          <ToastContainer />
        </div>
      );
    }
}

export default Form ;
