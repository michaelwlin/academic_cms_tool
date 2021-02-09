import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Dashboard = (props) => {
    const user = localStorage.getItem('user_id')

    const [userState, setUserState] = useState({
        firstname: "",
        lastname: "",
        user_role:"",
        user_id: ""
    })

    const [courseState, setCourseState] = useState([])

    const [state, setState] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:4000/users/${user}`)
            .then(response => setUserState({
                firstname: response.data[0].firstname,
                lastname: response.data[0].lastname,
                user_role: response.data[0].user_role,
                user_id: response.data[0].user_id
            }))
            .catch(error => console.log(error))
    }, [state])

    useEffect(() => {
        axios.get(`http://localhost:4000/courses`)
            .then(response => setCourseState(response.data))
            .catch(error => console.log(error))
    }, [state])

        return( 
        <div className="dash">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <div className = "Content">
                <div class = "ui breadcrumb">
                    <a class="section">COURSES</a>
                </div>
                <h2 style = {{fontSize: "32px", fontFamily:"Montserrat"}}>Welcome, {userState.firstname}.</h2>
                <div class = "dashboardInstructions">
                    <h4 style = {{fontSize: "20px", fontFamily:"Montserrat"}}>Let's get started!</h4>
                    <p style = {{fontSize: "16px"}}>
                        Select a course below to start adding content to it. 
                        When you’re finished, simply close your browser or log out. 
                        Don’t forget to save your work as you go!
                    </p>
                </div>
                <div className = "courseBar">
                        <a href = "/courses/new" className="ui yellow button" style = {{display: "inline-block", backgroundColor: "#FFDA99", color: "black"}}>New Course</a>
                        <div className="ui search" style = {{display: "inline-block", marginLeft: "150px", marginRight: "150px",}}>
                            <div className="ui icon input">
                                <input style = {{width:"500px"}}className="prompt" type="text" placeholder="Search for courses"/>
                                <i className="search icon"></i>
                            </div>
                        </div>
                        <div className="ui form" style = {{display: "inline-block", fontFamily: "Montserrat"}}>
                            <div className="field">
                                <div className="ui selection dropdown">
                                    <input type="hidden" name="course"/>
                                    <i className="dropdown icon"></i>
                                    <div className="default text">Select what to search by</div>
                                    <div className="menu">
                                        <div className="item" data-value="1">Option 1</div>
                                        <div className="item" data-value="0">Option 2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class = "dashboardTable">
                <table class="ui celled table">
                    <thead style = {{fontSize: '20px', color : 'grey'}}>
                        <tr>
                            <td>COURSE</td>
                            <td>LANGUAGE</td>
                            <td>OBJECTIVES</td>
                            <td>ACTIVITES</td>
                            <td>LAST EDITED</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody style = {{fontSize: '18px'}}>
                    {courseState.map((course, index) => (
                        <tr key = {index}>
                            <td data-label="courseName"><a href={`/course/${course.course_id}`}>{course.course_name}</a></td>
                            <td data-label="courseLanguage"><a href={`/language/${course.language_id}`}>{course.language}</a></td>
                            <td data-label="courseObjectives">4</td>
                            <td data-label="courseActivites">5</td>
                            <td data-label="courseLastEdited">{new Date(course.date_created).getMonth()}/{new Date(course.date_created).getDate()}/{new Date(course.date_created).getFullYear()}</td>
                            <td data-label="action">
                            <a href = {`/course/${course.course_id}`} style = {{backgroundColor: "#FFDA99", color: "black", fontFamily:"Montserrat"}} class="ui button">EDIT</a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        )
}

export default Dashboard;

