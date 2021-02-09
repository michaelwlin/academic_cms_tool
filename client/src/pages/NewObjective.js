import React, {Component} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

class NewObjective extends Component{
    render(){
    return (
        <div className = "courseNewObjective">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <div className = "Content">
                <div class = "ui breadcrumb">
                    <a href = "/dashboard" class="section">COURSES</a>
                    <i class="right angle icon divider"></i>
                    <a href = "/course" class="section">ELEMENTARY SPANISH 1</a>
                    <i class="right angle icon divider"></i>
                    <div class="active section">NEW OBJECTIVE</div>
                </div>
                <h2 style = {{fontSize: "32px"}}>Objective Creator</h2>
                <div className = "objectiveForm">
                    <form class = "ui form">
                        <div className = "objectiveFormLeft">
                            <div class = "field">
                                <label style = {{fontSize: "18px", color: "#454F54", marginBottom:"3%"}}>Objective Name</label>
                                <textarea rows = "3" name = "objectiveName" style = {{fontFamily:"Montserrat"}}></textarea>
                            </div>
                            <div>
                            <div class="field">
                                <label style = {{fontSize: "18px", color: "#454F54", marginBottom:"3%"}}>Knowledge Domain</label>
                                <div style = {{width: "70%"}} class="ui selection dropdown">
                                    <input type="hidden" name="objectiveDomain"/>
                                    <i class="dropdown icon"></i>
                                    <div class="default text">Select a domain</div>
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
                                <textarea name = "objectiveTags" rows = "8"></textarea>
                            </div>
                        </div>
                        <p style = {{marginTop:"3%"}}>
                        <a style = {{backgroundColor: "#FFDA99", color: "black", fontFamily:"Montserrat",}} class = "ui button" href = "/activity/new">Add Activity</a>
                        <button style = {{backgroundColor: "#ADD6EB", color: "black", fontFamily:"Montserrat", marginLeft:"10%"}} class="ui button" type="submit">Create Objective</button>
                        </p>                    
                    </form> 
                </div>    
            </div>
        </div>
        )
    }
}

export default NewObjective;
