import React from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

class Language extends React.Component {

    state = {
        //User
        user_id: null,
        firstname: null,
        lastname: null,
        user_role: null,
        //Language
        language_name: null,
        language_description: null,
        language_family: null,
        language_subfamily: null,
        language_wiki: null,
        language_speakers: null,
        language_writingsys: null,

    }

    componentDidMount() {
        //Get User ID from Local Storage
        this.setState({ user_id: localStorage.getItem('user_id') })

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
        axios.get(`http://localhost:4000/languages/${this.props.match.params.id}`)
            .then(response =>
                this.setState({
                    language_name: response.data[0].language,
                    language_description: response.data[0].description,
                    language_family: response.data[0].family,
                    language_subfamily: response.data[0].subfamily,
                    language_wiki: response.data[0].wiki_link,
                    language_speakers: response.data[0].speakers,
                    language_writingsys: response.data[0].writing_system,
                }
                ))
            .catch(error => console.log(error))

    }
    render() {
        return (
            <div className="courseNewActivity">
                <Navbar></Navbar>
                <Sidebar></Sidebar>
                <div className="Content">
                    <div class="ui breadcrumb">
                        <a href="/dashboard" class="section">COURSES</a>
                        <i class="right angle icon divider"></i>
                        <div class="active section">{this.state.language_name}</div>
                    </div>
                    <h2 style={{ fontSize: "32px", fontFamily: "Montserrat", marginBottom: "3%"}}>{this.state.language_name}</h2>
                    <div className="ui grid" >
                        <div className="eight wide column" >
                            <h2 style={{ fontFamily: "Montserrat", textDecoration: "underline" }}>Description</h2>
                            <p style={{ fontFamily: "Montserrat", fontSize: "24px" }}>{this.state.language_description}</p>
                            <h2 style={{ fontFamily: "Montserrat", textDecoration: "underline" }}>Speakers</h2>
                            <p style={{ fontFamily: "Montserrat", fontSize: "24px" }}>{this.state.language_speakers}</p>
                            <h2 style={{ fontFamily: "Montserrat", textDecoration: "underline" }}>Wikipedia Link</h2>
                            <p><a target="_blank" href = {this.state.language_wiki } style={{ fontFamily: "Montserrat", fontSize: "24px" }}>{this.state.language_wiki}</a></p>
                        </div>
                        <div className="eight wide column">
                            <h2 style={{ fontFamily: "Montserrat", textDecoration: "underline" }}>Family</h2>
                            <p style={{ fontFamily: "Montserrat", fontSize: "24px" }}>{this.state.language_family}</p>
                            <h2 style={{ fontFamily: "Montserrat", textDecoration: "underline" }}>Sub Family</h2>
                            <p style={{ fontFamily: "Montserrat", fontSize: "24px" }}>{this.state.language_subfamily}</p>
                            <h2 style={{ fontFamily: "Montserrat", textDecoration: "underline" }}>Writing System</h2>
                            <p style={{ fontFamily: "Montserrat", fontSize: "24px" }}>{this.state.language_writingsys}</p>
                    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Language;
