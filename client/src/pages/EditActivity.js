import React from 'react';
import {useState} from 'react';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


const EditActivity = (props) => {
    const [state, setState] = useState({
        activityType: "Match",
        taskType: "Translate",
        distractors: "2",
        verb: "recall"
    })
    const onChangeHandler = (event) => {
        setState({
            ...setState,
            [event.target.name]:event.target.value
        })
    }
    return (
        <div className = "courseEditActivity">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <div className = "Content">
                <div class = "ui breadcrumb">
                    <a href = "/dashboard" class="section">COURSES</a>
                    <i class="right angle icon divider"></i>
                    <a href = "/course/2" class="section">SPANISH</a>
                    <i class="right angle icon divider"></i>
                    <a href = "/objective/edit" class="section">OBJECTIVE NAME</a>
                    <i class="right angle icon divider"></i>
                    <div class="active section">EDIT ACTIVITY</div>
                </div>
                <h2 style = {{fontSize: "32px"}}>Activity Editor</h2>
                <div className = "activityForm">
                <form class = "ui form">
                    <div className = "activityFormLeft">
                    <div class="field" style = {{marginBottom:"7%"}}>
                        <label style = {{fontSize: "18px", color: "#454F54", marginBottom:"3%"}}>Activity Type</label>
                        <div style = {{width: "70%"}} class="ui selection dropdown">
                            <input type="hidden" name="activityType"/>
                            <i class="dropdown icon"></i>
                            <div class="default text">{state.activityType}</div>
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
                            <div class="default text">{state.taskType}</div>
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
                        <textarea style = {{fontFamily: "Montserrat", width: "140%"}} rows = "3" name = "promptText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</textarea>
                    </div>
                    <div class = "field">
                        <label style = {{fontSize: "18px", color: "#454F54", marginBottom:"3%"}}>Expected Response</label>
                        <textarea style = {{
                                fontFamily: "Montserrat", 
                                width: "140%"}} 
                            rows = "3" 
                            name = "expectedResponse">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</textarea>
                    </div>
                    </div>
                    <button style = {{
                        backgroundColor: "#ADD6EB", 
                        color: "black", 
                        fontFamily:"Montserrat", 
                        display:"block"}} 
                        class="ui button" 
                        type="submit">Save Activity</button>
                </form>
                </div>
            </div>
        </div>
        )      
}

export default EditActivity;
