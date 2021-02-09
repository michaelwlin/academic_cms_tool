import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Navbar = () => {
  const user = localStorage.getItem('user_id')

  const [userState, setUserState] = useState({
    firstname: "",
    lastname: "",
    user_role:"",
    user_id: ""
  })

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

    return (
      <div class="ui top fixed menu"> 
      <div className = "accountBlock">
          <div className = "accountInfo">
              <p className = "accountName">{userState.firstname} {userState.lastname}</p>
              <p className = "accountType">{userState.user_role}</p>  
          </div>
              <p className = "accountImage">
              <a href = "/profile"><i class="inverted circular olive user outline large link icon"></i></a>                    
              </p>
      </div>
  </div>
    );
}

export default Navbar
