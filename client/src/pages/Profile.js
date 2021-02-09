import React, {Component} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
class Profile extends Component{
    render(){
        return(
        <div className="profile">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <div className = "Content">
                <div class = "ui breadcrumb">
                    <a class="section">PROFILE</a>
                </div>
                <h2 style = {{fontSize: "32px", fontFamily:"Montserrat"}}>Update Your Profile</h2>
            </div>
        </div>
        )
    }     
}
export default Profile;