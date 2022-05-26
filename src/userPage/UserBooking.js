import React, { Component } from "react";
import axios from "axios"

import "../style/userBookingStyle.css"

class showBookingUser extends Component {

    state = {
        loading: true,
        tableData: null,
        dataToDisplay : [],
        error : false,
        getEmail :null,
        gettingEmailStatus : false,
        email: null,
         
    }
    intervalId = null;
    
    getEmailUser = async ()=>{
        let usersEmail = await fetch("http://localhost:3000/api/user/email",{
            method :"get",
        })
        let res = await usersEmail.json()    
        console.log(res)
        this.setState({getEmail:res})
        let emailOfUser = this.state.getEmail[0].email
        this.setState({gettingEmailStatus:true})
        this.setState({email:emailOfUser})
        console.log("=>>>" ,this.state.email)
        this.getData(emailOfUser)

    }

    getData = async (emailData)=>{
        let getBooking = emailData
        let postLogInEmail = await fetch("http://localhost:3000/api/user/user-bookings",{
            method :"post",
            body : JSON.stringify({email:getBooking}),
            headers :{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        let res = await postLogInEmail.json()    
        console.log(res)
        this.setState({tableData:res,loading:false})
        console.log(this.state.tableData)
        this.listOfData();
    }

    componentDidMount(){
        this.getEmailUser()
        
     this.intervalId = setInterval(() => {
        // this.getData();
        this.getEmailUser()
        // this.listOfData();
     }, 3000)
    }   

    componentWillUnmount() {
      clearInterval(this.intervalId)
    }

    listOfData = ()=>{
        let list = []
            for(let obj of this.state.tableData){
            list.push({
                date: obj.date,
                slot : obj.slot,
                typeBooking : obj.selecttype
            })
        }
        this.setState({dataToDisplay:list}) 
        
    }

    render(){
        const { loading, tableData } = this.state
         
        return(
            <div >
                {loading || !tableData ? (
                    <div><h1 className="NoAppointment">No Appointments to show, click on menu to book an ppointment</h1></div>
                ) : ( 
                    <div>
                        <h1 className="NoAppointment">Your Appointment </h1>
                    <table>
                        <thead>
                            <th>Selected Date</th>
                            <th>Selected Time</th>
                            <th>Type of Booking</th>
                        </thead>
                            <tbody>
                                {/* dataToDisplay */}
                            {this.state.dataToDisplay.map((d)=> (
                                <tr  key={d.id}>
                                    {/* date,slot,type,booked time  */}
                                <td>{d.date}</td>
                                <td>{d.slot}</td>
                                <td>{d.typeBooking}</td>
                                </tr>
                                ))}
                            </tbody>
                    </table>
                    </div>
                    
                )}
            </div>
        )
    }
}
export default showBookingUser;