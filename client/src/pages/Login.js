import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Mainpicture from '../images/life-satisfaction.svg'
import Logo from '../images/logo.svg'

const Login = (props) => {
    const history = useHistory();
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    })

    const [errorState, setErrorState] = useState({
        email: "",
        password: "",
        login: "",
    })

    const onChangeHandler = (event) => {
        setFormState({
            ...formState,
            [event.target.name]:event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:4000/users/login',formState)
            .then(response => {
                if(response.data.code === 204){
                    setErrorState({
                        email: response.data.email ? response.data.email : "",
                        login: response.data.login ? response.data.login : "",
                    })
                } else if (response.request.status === 200) {
                    console.log(response)
                    localStorage.setItem('user_id', response.data[0].user_id)
                    history.push("/dashboard")
                }
            })
            .catch(error=>console.log(error))
    }
    return(
        <div>
            <div class="ui top fixed menu"> 
            </div>
            <div className="ui grid">
                <div className="ui row">
                    <div className="ten wide column center aligned row" >
                        <div className="LoginMainBackground">
                        <img src={Mainpicture} className="ui middle aligned large image"/>
                        </div> 
                    </div>
                    <div className="five wide column" style = {{marginLeft:'2.5%'}}>
                        <div className="LogoLoginHeader">
                                <img src={Logo}  className="ui mini image "style={{marginBottom:"0px"}}/>
                                <h3 style={{marginTop:"0px",fontFamily:"Montserrat",fontWeight:"bold"}}>Bloom CMS V0.0.1</h3>
                        </div>
                        <form onSubmit = {onSubmitHandler} class="ui form">
                            <div class="field">
                                <label>Email</label>
                                <input onChange= {onChangeHandler} type="text" name="email" placeholder="Email" />
                                <small className="form-text text-muted" style={{color:"red"}}>{errorState.email}</small>
                            </div>
                            <div class="field">
                                <label>Password</label>
                                <input onChange= {onChangeHandler} type="password" name="password" placeholder="Password"/>
                                <p style = {{marginTop:"10px"}}>
                                <a href = "/placeholder">Forgot Password?</a>
                                </p>                                
                            </div>
                            <button type = "submit" style = {{backgroundColor: "#D2ECF9", color: "black", fontFamily:"Montserrat"}}class="fluid ui button primary ">Log In</button>
                        </form>
                        <p style={{color:"red", textAlign:"center"}}>
                        <small className="form-text text-muted">{errorState.login}</small>
                        </p>
                        <p style = {{textAlign:'center', marginTop:"10px"}}>
                        Don't have an account? <a href = "/register" style = {{fontWeight:"bold"}}>Sign Up</a>
                        </p>                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Login;