import React from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

class Course extends React.Component{ 

    state = {
        //User
        user_id: null,
        firstname: null,
        lastname: null,
        user_role: null,
        //Course
        course_name: null
        
    }

    componentDidMount(){
        //Get User ID from Local Storage
        this.setState({user_id: localStorage.getItem('user_id')}) 

        //User Info with Axios.get
        axios.get(`http://localhost:4000/users/${localStorage.getItem('user_id')}`)
            .then(response => 
                this.setState({
                    firstname: response.data[0].firstname,
                    lastname: response.data[0].lastname,
                    user_role: response.data[0].user_role,
                    user_id: response.data[0].user_id
                }
            ))
            .catch(error => console.log(error))

        //Course Info with Axios.get
        axios.get(`http://localhost:4000/courses/${this.props.match.params.id}`)
            .then(response => 
                this.setState({
                    course_name: response.data[0].course_name
                }
            ))
            .catch(error => console.log(error))

    }

    render(){
        return(
            <div className = "courseDescription">
                <Navbar></Navbar>
                <Sidebar></Sidebar>
                <div className = "Content">
                    <div className = "ui breadcrumb">
                        <a href = "/dashboard" className="section">COURSES</a>
                        <i className="right angle icon divider"></i>
                        <div className="active section" style = {{textTransform: "uppercase"}}>{this.state.course_name}</div>
                    </div>
                    <h2 style = {{fontSize: "32px"}}>Course Editor View</h2>
                    <div className = "courseBar">
                        <a href = "/objective/new" className="ui yellow button" style = {{display: "inline-block", backgroundColor: "#FFDA99", color: "black"}}>New Objective</a>
                        <div className="ui search" style = {{display: "inline-block", marginLeft: "150px", marginRight: "150px",}}>
                            <div className="ui icon input">
                                <input style = {{width:"500px"}}className="prompt" type="text" placeholder="Search for objectives"/>
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
                    <div className = "dashboardTable">
                    <table className="ui celled table">
                        <thead style = {{fontSize: '20px', color : 'grey'}}>
                            <tr>
                                <td>LEARNING OBJECTIVE</td>
                                <td>DOMAIN</td>
                                <td>BLOOM VERBS</td>
                                <td>ACTIVITES</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody style = {{fontSize: '18px'}}>
                            <tr>
                                <td data-label="courseObjective">Latin has no def articles...</td>
                                <td data-label="courseDomain">Syntax</td>
                                <td data-label="courseVerbs">Recall, Know</td>
                                <td data-label="courseActivities">3</td>
                                <td data-label="action">
                                <a href = "/objective/edit" style = {{backgroundColor: "#FFDA99", color: "black", fontFamily:"Montserrat"}} className="ui button">EDIT</a>
                                <button style = {{backgroundColor: "#FD9BA3", color: "black", fontFamily:"Montserrat"}} className="ui button">DEL</button>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="courseObjective">Nouns vary by gender</td>
                                <td data-label="courseDomain">Syntax</td>
                                <td data-label="courseVerbs">Recall, Know</td>
                                <td data-label="courseActivities">5</td>
                                <td data-label="action">
                                    <button style = {{backgroundColor: "#FFDA99", color: "black", fontFamily:"Montserrat"}} className="ui button">EDIT</button>
                                    <button style = {{backgroundColor: "#FD9BA3", color: "black", fontFamily:"Montserrat"}} className="ui button">DEL</button>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="courseObjective">Nouns vary by person</td>
                                <td data-label="courseDomain">Syntax</td>
                                <td data-label="courseVerbs">Recall, Know</td>
                                <td data-label="courseActivities">3</td>
                                <td data-label="action">
                                <button style = {{backgroundColor: "#FFDA99", color: "black", fontFamily:"Montserrat"}} className="ui button">EDIT</button>
                                <button style = {{backgroundColor: "#FD9BA3", color: "black", fontFamily:"Montserrat"}} className="ui button">DEL</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
        )
    }  
}
export default Course;
