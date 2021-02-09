import React, {Component} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

class NewActivity extends Component{
    render(){
    return (
        <div className = "courseNewActivity">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <div className = "Content">
                <div class = "ui breadcrumb">
                    <a href = "/dashboard" class="section">COURSES</a>
                    <i class="right angle icon divider"></i>
                    <a href = "/course" class="section">ELEMENTARY SPANISH 1</a>
                    <i class="right angle icon divider"></i>
                    <a href = "/objective/edit" class="section">OBJECTIVE NAME</a>
                    <i class="right angle icon divider"></i>
                    <div class="active section">NEW ACTIVITY</div>
                </div>
                <h2 style = {{fontSize: "32px"}}>Activity Creator</h2>
                <div className = "activityForm">
                    <form class = "ui form">
                        <div className = "activityFormLeft">
                        <div class="field" style = {{marginBottom:"7%"}}>
                            <label style = {{fontSize: "18px", color: "#454F54", marginBottom:"3%"}}>Activity Type</label>
                            <div style = {{width: "70%"}} class="ui selection dropdown">
                                <input type="hidden" name="activityType"/>
                                <i class="dropdown icon"></i>
                                <div class="default text">Select an activity type</div>
                                <div class="menu">
                                    <div class="item" data-value="1">Option 1</div>
                                    <div class="item" data-value="0">Option 2</div>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <label style = {{fontSize: "18px", color: "#454F54", marginBottom:"3%"}}>Task Type</label>
                            <div style = {{width: "70%"}} class="ui selection dropdown">
                                <input type="hidden" name="taskType"/>
                                <i class="dropdown icon"></i>
                                <div class="default text">Select a task type</div>
                                <div class="menu">
                                    <div class="item" data-value="1">Option 1</div>
                                    <div class="item" data-value="0">Option 2</div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className = "activityFormRight">
                        <div class = "field" style = {{marginBottom: "7%"}}>
                            <label style = {{fontSize: "18px", color: "#454F54", marginBottom:"3%"}}>Prompt Text</label>
                            <textarea style = {{fontFamily: "Montserrat", width: "140%"}} rows = "3" name = "promptText" placeholder = "Write a prompt here. Leave Blank if no response."></textarea>
                        </div>
                        <div class = "field">
                            <label style = {{fontSize: "18px", color: "#454F54", marginBottom:"3%"}}>Expected Response</label>
                            <textarea style = {{fontFamily: "Montserrat", width: "140%"}} rows = "3" name = "expectedResponse" placeholder = "Write the expected response here. Leave blank if no response."></textarea>
                        </div>
                        </div>
                        <button style = {{backgroundColor: "#ADD6EB", color: "black", fontFamily:"Montserrat", display:"block"}} class="ui button" type="submit">Add Activity</button>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default NewActivity;
