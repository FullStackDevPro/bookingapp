import React, { Component, useState } from "react"; 
import moment from "moment"
import axios from "axios"
// import styled from 'styled-components';
import "../style/BookingStyle.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';


class Booking extends Component{

    constructor(props){
        super(props);
        this.state = {
            fullDate : [],
            years : [],
            month : [],
            selectdDate : "",
            slot  : ["8:00--9:00","9:00--10:00","10:00--11:00","11:00--12:00","13:00--14:00","14:00--15:00","15:00--16:00"],
            currentDate : new Date().toISOString().slice(0,10),
            days : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            selectedMonth : "",
            months : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            selectedDay : "",
            check  : false ,
            appointment : "",
            errorYear:"Please select a Year !",
            errorMonth:"Please select a Month !",
            postState : false,
            getAppointments:[] ,
            AppointmentType : ["Eye examination-glasses", "Eye examination - lenses","Eye health examination", "eye examination children 8-12" , "Eye examination youth 13-19", "Eye examination - driving license" , "Eye examination - First time","Terminal goggles / goggles","Examination dry eyes"],
            selectedAppointmentType:"",
        };
    }

    componentDidMount() {
        // remaining months of selected year
        const dateForRemaining  = new Date();
        const rest = this.state.months.slice(dateForRemaining.getMonth())
        let list = []
        for (let i = 0; i<rest.length;i++){
            list.push(rest[i])
        }
        // console.log(typeof(list), list.length)
        // console.log("rest : ",list)
        
        this.setState({
            years:[
                {year : `${new Date().getFullYear()}`, month : list },
                {year : "2023",month : this.state.months},
            ]
        });

        //get appointments from DB and restore the slot
        // axios.get("http://localhost:3000/api/data")
        // .then((res) => this.setState({getAppointments : res.data}))
        // .catch(err => console.log(err))
    }

    errorDisplay = (errorValue)=>{
        toast.error(`${errorValue}`,
            {
            position:"top-center",
            theme:"colored",
            autoClose:4000,
            pauseOnHover: true,
            closeButton:true,
            hideProgressBar :true, 
        })
    }

    successNotify = () => {
        toast.success(`${this.state.selectedDay} - ${this.state.appointment}  appointment for ${this.state.selectedAppointmentType} is booked successfuly `,
    {
    position:"top-center",
    theme:"colored",
    autoClose:6000,
    pauseOnHover: true,
    closeButton:true,
    hideProgressBar :true,    
    })
    }

   errorNotify = () => {
        toast.error("Error during booking the appointment",
    {
    position:"top-center",
    theme:"colored",
    autoClose:3000,
    pauseOnHover: true,
    closeButton:true,
    hideProgressBar :true, 
    })
    }

    selectChange(e) {
        if(e.target.value==""){
            this.errorDisplay(this.state.errorYear)
            this.setState({selectdDate:""})
        }else{
            this.setState({selectdDate: e.target.value})
            this.setState({month :this.state.years.find(x => x.year === e.target.value).month})
        }
    }

    selectedMonthChange(e) {
        if(e.target.value==""){
            this.errorDisplay(this.state.errorMonth)
            this.setState({selectedMonth:""})
        }else{
            this.setState({selectedMonth : e.target.value})
            if(this.state.check == true){
                this.setState({fullDate : [] })
                this.setState({check : false})
                this.setState({selectedDay:""})
                this.displayFullDate(e.target.value)
            }else{
                this.displayFullDate(e.target.value)
            }
        }
    }

    displayFullDate = (value) => {
        const covertMonthToNum  = moment().month(`${value}`).format("M");  //return the number of month name
        const daysInMonth = new Date(this.state.selectdDate, covertMonthToNum , 0).getDate();
        let listOfDaye = [];
        for (let i = 1; i <= daysInMonth; i++) {
            var d = new Date(this.state.selectdDate, covertMonthToNum - 1, i);
            var dayName = this.state.days[d.getDay()];
            if(dayName.indexOf(this.state.days[0]) !== -1 || dayName.indexOf(this.state.days[6]) !== -1){
                listOfDaye.push(`---No appointments---`)
            }else {
                listOfDaye.push(this.state.selectdDate + "-"+ value + "-"+ i + '-' + dayName)
                // console.log(this.state.selectdDate + "-"+ value + "-"+ i + '-' + dayName)
            }
        }
        this.setState({fullDate : listOfDaye})
        this.setState({check:true})
        // console.log("the fullDays is : ",this.state.fullDate)
    }

    selectedDayChange(e){
        if(e.target.value=="---No appointments---"){
            this.errorDisplay("Not allowed to select No appointment!")
            this.setState({selectedDay:""})
        }else{
            this.setState({selectedDay : e.target.value})
        }    
    }

    setDate = (e) => {
        this.setState({currentDate : e.target.value})}

    selectedappointmentChange = (e) => {
        this.setState({appointment: e.target.value})
    }

    selectedAppointment_Type = (e)=>{
        this.setState( {selectedAppointmentType:e.target.value})
    }

    postNewAppointment = () => { 

        if(this.state.selectedMonth == "" ){
            this.errorDisplay(this.state.errorMonth)
        }else if(this.state.selectdDate==""){
            this.errorDisplay(this.state.errorYear)
        }else if(this.state.selectedDay==""){
            this.errorDisplay("Please select a day !")
        }else if(this.state.appointment==""){
            this.errorDisplay("Please select an appointment !")
        }else if(this.state.selectedAppointmentType==""){
            this.errorDisplay("Please select a type !")
        }else{

            const newAppointment = {
                email : "adam@gmail.com",
                date : this.state.selectedDay,
                slot : this.state.appointment,
                typeBooking :  this.state.selectedAppointmentType
            }
            console.log(newAppointment)
            this.postBookingToDB(JSON.stringify(newAppointment))
        }
    };

    postBookingToDB = async(bookin_data)=>{
        console.log(bookin_data)
        let postingBooking = await fetch("http://localhost:3000/api/user/booking",{
            method :"post",
            body : bookin_data,
            headers :{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        let res = await postingBooking.json()
        if(res.status == 200){
            this.successNotify()
            this.setState({
                selectdDate : "",
                selectedMonth:"",
                selectedDay:"",
                appointment:"",
                selectedAppointmentType:"",
                month:[],
                fullDate:[]
            })
            this.setState({postState : true})
        }else if(res.status == 400){
            this.errorDisplay("The appointment is not booked !!!")
        }else{
            this.errorDisplay("Something wrong happens during booking to DB")
        }
    }

    displayResult = (value)=> {
        if(value == true){
            this.successNotify()
        }
        else {
            this.errorNotify()
        }
    }

    render(){
        let checkAppointment = this.state.check
             return (
                <div className="center" >
                       <h1 className="timeDisplay">Current Date : {this.state.currentDate}</h1>
                       
                       <h1>Please select a year :</h1>
                       <select  className="form-control" value={this.state.selectdDate} onChange = {this.selectChange.bind(this) }>
                       <option></option>
                                {this.state.years.map(x => {
                                    return <option>{x.year}</option>
                                })}
                       </select>
                       {/* </form> */}
                       
                       {/* <form className="form-horizontal">         */}
                       <h1>Please select a month :</h1>
                       <select className="form-control" value={this.state.selectedMonth} onChange = {this.selectedMonthChange.bind(this)}>
                       <option></option>
                           {this.state.month.map(x => {
                               return <option>{x}</option>
                           })}
                       </select>
                       {/* </form>  */}
                        
                        {/* <form className="form-horizontal"> */}
                       <h1>Please select a day :</h1>
                       <select className="form-control" value={this.state.selectedDay} onChange = {this.selectedDayChange.bind(this)}>
                       <option></option>
                           {this.state.fullDate.map(x => {  
                               return <option>{x}</option>
                           })}
                       </select>
                       {/* </form> */}

                       {/* <form className="form-horizontal">   */}
                       <h1>Please select an appointment : </h1>
                       <select className="form-control" value={this.state.appointment} onChange = {this.selectedappointmentChange.bind(this) }>
                       <option></option>
                           {this.state.slot.map(x => {  if(checkAppointment == true){
                               return <option>{x}</option>
                           }

                           })}
                       </select>
                       {/* </form> */}
                       <h1>Please select a type of examination :</h1>
                       <select className="form-control" value={this.state.selectedAppointmentType} onChange = {this.selectedAppointment_Type.bind(this)}>
                       <option></option>
                           {this.state.AppointmentType.map(x => {  
                               return <option>{x}</option>
                           })}
                       </select>
                        <br>
                        </br>
                       <button class="button-86" role="button" onClick={this.postNewAppointment}>Book</button>
                       <ToastContainer  style={{fontSize : "14px", width : "80%"}}/>
                    {/* </section> */}
                {/* </body> */}
                </div>
        )
    }
}
export default Booking ;



