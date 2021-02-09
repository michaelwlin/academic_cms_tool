import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Mainpicture from '../images/life-satisfaction.svg'
import Logo from '../images/logo.svg'

const Register = (props) => {
    const history = useHistory();
    const [formState, setFormState] = useState({
        username: "",
        password: "",
        confirm_password: "",
        firstname: "",
        lastname: "",
        email: "",
    })

    const [errorState, setErrorState] = useState({
        username: "",
        password: "",
        confirm_password: "",
        firstname: "",
        lastname: "",
        email: "",
    })

    const onChangeHandler = (event) => {
        setFormState({
            ...formState,
            [event.target.name]:event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:4000/users/new',formState)
            .then(response => {
                if(response.data.code === 204){
                    setErrorState({
                        username: response.data.username ? response.data.username : "",
                        password: response.data.password ? response.data.password : "",
                        password_confirm: response.data.password_confirm ? response.data.password_confirm : "",
                        firstname: response.data.firstname ? response.data.firstname : "",
                        lastname: response.data.lastname ? response.data.lastname : "",
                        email: response.data.email ? response.data.email : "",

                    })
                } else if (response.request.status === 200) {
                    localStorage.setItem('user_id', response.data.insertId)
                    history.push("/dashboard")
                }
            })
            .catch(error=>console.log(error))
    }

    const passwordError = "Password must be at least 8 characters."

    return(
        <div>
            <div className="ui top fixed menu"> 
            </div>
            <div className="ui grid">
                <div className="ui row">
                    <div className="ten wide column center aligned row">
                        <div className="LoginMainBackground">
                        <img src={Mainpicture} className="ui middle aligned large image"/>
                        </div> 
                    </div>
                    <div className="five wide column" style = {{marginLeft:'2.5%'}}>
                        <div className="LogoRegisterHeader">
                                <img src={Logo}  className="ui mini image "style={{marginBottom:"0px"}}/>
                                <h3 style={{marginTop: "0px", fontFamily:"Montserrat",fontWeight:"bold"}}>Bloom CMS V0.0.1</h3>
                        </div>
                        <form onSubmit= {onSubmitHandler} className="ui form">
                            <div className="field">
                                <label>Name</label>
                                <div className="two fields">
                                <div className="field">
                                    <input onChange= {onChangeHandler}type="text" name="firstname" placeholder="First Name"/>
                                    <small className="form-text text-muted" style={{color:"red"}}>{errorState.firstname}</small>
                                </div>
                                <div className="field">
                                    <input onChange= {onChangeHandler} type="text" name="lastname" placeholder="Last Name"/>
                                    <small className="form-text text-muted" style={{color:"red"}}>{errorState.lastname}</small>
                                </div>
                                </div>
                            </div>
                            <div className="field">
                                <label>Username</label>
                                <input onChange= {onChangeHandler} type="text" name="username" placeholder="Username"/>
                                <small className="form-text text-muted" style={{color:"red"}}>{errorState.username}</small>
                            </div>
                            <div className="field">
                                <label>Email</label>
                                <input onChange= {onChangeHandler} type="text" name="email" placeholder="Email" />
                                <small className="form-text text-muted" style={{color:"red"}}>{errorState.email}</small>
                            </div>
                            <div className="field">
                                <label>Password</label>
                                <input onChange= {onChangeHandler} type="password" name="password" placeholder="Password"/>
                                <small  class="form-text text-muted" style={{color:"red"}}>{ formState.password.length > 0 && formState.password.length < 8 && errorState.password < 1 && passwordError}</small>
                                <small className="form-text text-muted" style={{color:"red"}}>{errorState.password}</small>
                            </div>
                            <div className="field">
                                <label>Confirm Password</label>
                                <input onChange= {onChangeHandler} type="password" name="password_confirm" placeholder="Confirm Password"/>
                                <small className="form-text text-muted" style={{color:"red"}}>{errorState.password_confirm}</small>
                            </div>
                            <button type = "submit" style = {{backgroundColor: "#D2ECF9", color: "black", fontFamily:"Montserrat"}} className="fluid ui button primary">Sign up</button>
                        </form>
                        <p style = {{textAlign:'center', marginTop:"10px", color:'darkgrey'}}>
                        By signing up, you agree to our <span className = "spanBold">Terms</span>, <span className = "spanBold">Data Policy</span> and <span className = "spanBold">Cookies Policy</span>.
                        </p>
                        <p style = {{textAlign:'center', marginTop:"10px"}}>
                        Already Registered? <a href = "/login" style = {{fontWeight:'bold'}}>Login</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;