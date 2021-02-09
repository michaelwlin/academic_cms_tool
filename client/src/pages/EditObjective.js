import React from 'react';
import {useState} from 'react';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


const EditObjective = (props) => {
    const [state, setState] = useState({
        name: "Latin has no def articles",
        domain: "Syntax",
        tags: []
    })
    const onChangeHandler = (event) => {
        setState({
            ...setState,
            [event.target.name]:event.target.value 
        })
    }
    return (
        <div className = "courseObjective">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <div className = "Content">
                <div class = "ui breadcrumb">
                    <a href = "/dashboard" class="section">COURSES</a>
                    <i class="right angle icon divider"></i>
                    <a href = "/course/2" class="section">SPANISH</a>
                    <i class="right angle icon divider"></i>
                    <div class="active section">OBJECTIVE NAME</div>
                </div>
                <h2 style = {{fontSize: "32px"}}>Objective Editor</h2>
                <div className = "objectiveForm">
                    <form class = "ui form">
                        <div className = "objectiveFormLeft">
                            <div class = "field">
                                <label style = {{fontSize: "18px", color: "#454F54", marginBottom:"3%"}}>Objective Name</label>
                                <textarea onChange= {onChangeHandler} name = "objectiveName" rows = "3" style = {{fontFamily:"Montserrat"}} value = {state.name}></textarea>
                            </div>
                            <div>
                            <div class="field">
                                <label style = {{fontSize: "18px", color: "#454F54", marginBottom:"3%"}}>Knowledge Domain</label>
                                <div style = {{width: "70%"}} class="ui selection dropdown">
                                    <input type="hidden" name="objectiveDomain" onChange = {onChangeHandler}></input>
                                    <i class="dropdown icon"></i>
                                    <div class="default text">{state.domain}</div>
                                    <div class="menu">
                                        <div class="item" data-value="1">Option 1</div>
                                        <div class="item" data-value="0">Option 2</div>
                                    </div>
                                    
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className = "objectiveFormRight">
                            <div class = "field">
                                <label style = {{fontSize: "18px", color: "#454F54", marginBottom:"3%"}}>Tags</label>
                                <textarea style = {{fontFamily:"Montserrat"}} rows ="8" name = "objectiveTags" onChange = {onChangeHandler}>{state.tags}</textarea>
                            </div>
                        </div>
                        <p style = {{marginTop:"3%"}}>
                        <a style = {{backgroundColor: "#FFDA99", color: "black", fontFamily:"Montserrat",}} class = "ui button" href = "/activity/new">Add Activity</a>
                        <button style = {{backgroundColor: "#ADD6EB", color: "black", fontFamily:"Montserrat", marginLeft:"10%"}} class="ui button" type="submit">Save Objective</button>
                        </p>
                    </form> 
                </div>
                <div class = "dashboardTable">
                    <table class="ui celled table">
                        <thead style = {{fontSize: '20px', color : 'grey'}}>
                            <tr>
                                <td>ACTIVITY TYPE</td>
                                <td>TASK TYPE</td>
                                <td>DISTRACTORS</td>
                                <td>BLOOM VERB</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody style = {{fontSize: '18px'}}>
                            <tr>
                                <td data-label="courseObjective">Match</td>
                                <td data-label="courseDomain">Translate</td>
                                <td data-label="courseVerbs">2</td>
                                <td data-label="courseActivities">Recall</td>
                                <td data-label="action">
                                <a href = "/activity/edit" style = {{backgroundColor: "#FFDA99", color: "black", fontFamily:"Montserrat"}} class="ui button">EDIT</a>
                                <button style = {{backgroundColor: "#FD9BA3", color: "black", fontFamily:"Montserrat"}} class="ui button">DEL</button>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="courseObjective">Multiple Drag-Drop</td>
                                <td data-label="courseDomain">Translate</td>
                                <td data-label="courseVerbs">4</td>
                                <td data-label="courseActivities">Recall</td>
                                <td data-label="action">
                                <a href = "/activity/edit" style = {{backgroundColor: "#FFDA99", color: "black", fontFamily:"Montserrat"}} class="ui button">EDIT</a>
                                <button style = {{backgroundColor: "#FD9BA3", color: "black", fontFamily:"Montserrat"}} class="ui button">DEL</button>
                                </td>
                            </tr>                            <tr>
                                <td data-label="courseObjective">Single Fill-In</td>
                                <td data-label="courseDomain">Translate</td>
                                <td data-label="courseVerbs">4</td>
                                <td data-label="courseActivities">Recall</td>
                                <td data-label="action">
                                <a href = "/activity/edit" style = {{backgroundColor: "#FFDA99", color: "black", fontFamily:"Montserrat"}} class="ui button">EDIT</a>
                                <button style = {{backgroundColor: "#FD9BA3", color: "black", fontFamily:"Montserrat"}} class="ui button">DEL</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>      
            </div>
        </div>
        )
}

export default EditObjective;
