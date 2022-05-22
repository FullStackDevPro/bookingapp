import React, { Component } from "react";
import axios from "axios"

import "../style/userBookingStyle.css"

class showBookingUser extends Component {

    state = {
        loading: true,
        tableData: null,
        dataToDisplay : [],
         
    }
    intervalId = null;

    getData = () => {
        axios.get("http://localhost:3000/api/data")
        .then((res) => this.setState({tableData:res.data,loading:false})
        .catch(err => console.log(err))
        )}

    // componentDidMount(){
    //   this.getData();
      

    //  this.intervalId = setInterval(() => {
    //     this.getData();
    //     this.listOfData();
    //  }, 4000)
    // }   

    componentWillUnmount() {
      clearInterval(this.intervalId)
    }

    listOfData = ()=>{
        let list = []
            for(let obj of this.state.tableData){
            list.push({
                student_id: obj.student_id,
                student_name : `${obj.student.name}`,
                course_Code: `${obj.course_Code}`,
                date: `${obj.date}`,
                course_Name : `${obj.Courses.course_Name}`
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
                        </thead>
                            <tbody>
                                {/* dataToDisplay */}
                            {this.state.dataToDisplay.map((d)=> (
                                <tr  key={d.id}>
                                    {/* date,slot,type,booked time  */}
                                <td>{d.student_id}</td>
                                <td>{d.student_name}</td>
                                <td>{d.student_name}</td>
                                <td>{d.student_name}</td>
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