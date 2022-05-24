import React, { Component } from "react";
import "../style/LoginStyle.css" 
import { ToastContainer, toast } from 'react-toastify';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import GoToUserPage from "../userPage/UserPage"
import HomePage from "../HomePage/Home"
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import {useNavigate} from "react-router-dom"
import {Navigate} from "react-router-dom"


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
            InvalidName : "Invalid Name, not allowed to enter number, not allowed to be empty",
            validEmail : "Valid Email",
            InvalidEmail : "Invalid Email ",
            passWordMessage : "Please, enter the password ",
            passWordMessage2 : "Please, enter the password in the signUp form",
            redirect : false,

            userEmail : "",
            userPassword : "",
            fullName :"",
            emailStstus : false,
            passwordStstus : false,
            nameStstus : false,
            isLogedStatus : false
            
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
                this.isLoged()           
            }else{
                console.log("setting value in LOGIN FORM is faild ")
            }
            
        }else{
            let getNameStatus = this.checkUserName(this.state.nameOfUser); 
            let getEmailStatus2 =this.checkUserEmail(this.state.email);
            let getPasswordStatus2 = this.checkUserPassword(this.state.passWord)
            if(getEmailStatus2 == true && getPasswordStatus2 == true && getNameStatus == true ){
                this.setState({userEmail:this.state.email , userPassword : this.state.passWord ,fullName : this.state.nameOfUser})
                console.log("the signUp form is checked ", this.state.email , "password" , this.state.passWord , "Name ",this.state.nameOfUser)
                this.newUser()
            }else{
                console.log("setting value in REGISTER FORM is faild ")
            } 
        }
        this.makeEmpty()
        e.preventDefault();
    }

    isLoged = ()=>{
        // this.setState({isLogedStatus:true})
        // console.log(this.state.isLogedStatus)
        let dataToLogIn = {
            email :  this.state.email,
            password :  this.state.passWord,
        }
        console.log("====>" ,dataToLogIn)
        this.checkUserLogIn(JSON.stringify(dataToLogIn))
    }

    checkUserLogIn = async(login_data)=>{
        console.log(login_data)
        let postingUser = await fetch("http://localhost:3000/api/user/login",{
            method :"post",
            body : login_data,
            headers :{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        let res = await postingUser.json()
        if(res.status == 200){
            this.setState({isLogedStatus:true})
            this.setState({redirect:true})
            this.SuccessDisplay("You logged In") 
        }else if(res.status == 400){
            this.errorDisplay("Invalid password")
        }else if(res.status==401) {
            this.errorDisplay("Email is not found")
        }
    }

    newUser = ()=>{
        let newUser = {
            name  : this.state.nameOfUser,
            email :  this.state.email,
            password :  this.state.passWord,
        }
        console.log("====>" ,newUser)
        this.postingNewUser(JSON.stringify(newUser))

    }

    postingNewUser = async(postUser)=>{
        console.log(postUser)
        let postingUser = await fetch("http://localhost:3000/api/user/register",{
            method :"post",
            body : postUser,
            headers :{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        let res = await postingUser.json()
        if(res.status == 200){
            this.SuccessDisplay("The account is created successfuly")
        }else if(res.status == 400){
            this.errorDisplay("Email already exists")
        }else {
            this.errorDisplay("Password should be more than 6 characters")
        }
    }

    makeEmpty = ()=> {
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

    render() {
        // let page ;
        // if(this.state.isLogedStatus){
        //     return (    
        //         <HomePage isOpen={false}/>
        //     )
        // }else{ 

      return (
          
        <div className="container">
          <div style={{transform: `translate(${this.state.form === 'login' ? 0 : 250}px, 0px)`}} className="form-div">
            <form onSubmit={this.onSubmit.bind(this)}>
              <input placeholder="Email" type="text"  value={this.state.email} onChange = {this.getUserEmail.bind(this)}/>
              <input placeholder="Password" type="password"  value={this.state.passWord} onChange={this.getUserPassword.bind(this)}/>
              {this.state.form === 'login' ? '': <input placeholder="Name" type="text"  value={this.state.nameOfUser} onChange={this.getUserName.bind(this)}/>}
              {/* <button className="button-primary">Submit</button> */}
              {this.state.form === 'login' ? <button className="button-primary">Log In</button> : <button className="button-primary">Sign Up</button> }
              { this.state.redirect && <Navigate to='/userPage'  replace={true} />}
            </form>
          </div>
          <div style={{transform: `translate(${this.state.form === 'login' ? 0 : -400}px, 0px)`}} className="button-div">
            <p className="buttonText">{this.state.form === 'login' ? 'Do not have an account?' : 'Already a member?'}</p>
            <button onClick={() => {this.setState({form: this.toggle[this.state.form]})}}>{this.toggle[this.state.form]}</button>
          </div>
          <ToastContainer style={{fontSize :"14px", width:"80%"}} />
        </div>
      );
    }
    
    // }
}

export default Form ;
