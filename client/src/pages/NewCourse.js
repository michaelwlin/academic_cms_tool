import React, {useState, useEffect, Component} from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const NewCourse = (props) => {
    const [languageState, setLanguageState] = useState([])

    const [state, setState] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:4000/languages/all/names`)
            .then(response => setLanguageState(response.data))
            .catch(error => console.log(error))
    }, [state])

    useEffect(() => {
        const script = document.createElement('script')
    })

    return (
        <div className = "courseNewActivity">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <div className = "Content">
                <div class = "ui breadcrumb">
                    <a href = "/dashboard" class="section">COURSES</a>
                    <i class="right angle icon divider"></i>
                    <div class="active section">NEW COURSE</div>
                </div>
                <h2 style = {{fontSize: "32px"}}>Course Creator</h2>
                <div className = "activityForm">
                    <form class = "ui form">
                        <div className = "activityFormLeft">
                        <div class="field" style = {{marginBottom:"3%"}}>
                        <label style = {{fontSize: "18px", color: "#454F54", marginBottom:"3%"}}>Course Title</label>
                        <input style = {{fontFamily: "Montserrat", width: "90%"}} name = "course_title" placeholder = "Course Title"></input>
                        </div>
                        <div class="field" style = {{marginBottom:"3%"}}>
                            <label style = {{fontSize: "18px", color: "#454F54", marginBottom:"3%"}}>Course Language</label>
                            <div class="ui selection dropdown" style = {{width: "90%"}}>
                        <input type="hidden" name="gender"/>
                        <i class="dropdown icon"></i>
                        <div class="default text">Language</div>
                        <div class="menu">
                            <div class="item" data-value="1">Male</div>
                            <div class="item" data-value="0">Female</div>
                        </div>
                        </div>
                            
                        </div>
                        <div class="field">
                            <label style = {{fontSize: "18px", color: "#454F54", marginBottom:"3%"}}>Course Type</label>
                            <div style = {{width: "90%", marginBottom:"3%"}} class="ui selection dropdown">
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
                            <label style = {{fontSize: "18px", color: "#454F54", marginBottom:"3%"}}>Course Description</label>
                            <textarea style = {{fontFamily: "Montserrat", width: "140%"}} rows = "3" name = "promptText" placeholder = "Write a description here. Leave Blank if no response."></textarea>
                        </div>
                        </div>
                        <button style = {{backgroundColor: "#ADD6EB", color: "black", fontFamily:"Montserrat", display:"block"}} class="ui button" type="submit">Create Course</button>
                    </form>
                </div>
            </div>
        </div>
        )
}

export default NewCourse;
