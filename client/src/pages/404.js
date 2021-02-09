import React, { Component } from 'react'
import Wandering from '../images/mindfulness.jpg'
import Navbar from '../components/Navbar'

class Lost extends Component {
    render() {
        return (
            <div className="profile" style={{
                textAlign: "center",
            }}>
                <Navbar></Navbar>
                <h2 style={{ marginTop: "10%", fontSize: "48px", fontFamily: "Montserrat" }}>Oops! We can't find that page!
                </h2>
                <img src={Wandering} alt="" style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "25%",
                    marginTop: "2%"
                }} />
                <h3 style = {{fontSize: "32px", fontFamily: "Montserrat"}}><a href="/dashboard">Go Home</a></h3>
            </div>
        )
    }
}
export default Lost;