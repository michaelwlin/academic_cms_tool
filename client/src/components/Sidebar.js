import React from 'react'
import Logo from '../images/logo.svg'

const Sidebar = () => {

    return (
        <div class="ui left vertical sidebar menu visible">
                <div className="mainLogo">
                <a href ="/dashboard"><img src={Logo}  className="ui centered mini image"/></a>
                </div>
                <div className = "actionIcons">
                    <p>
                        <i class="inverted grey th big link icon"></i>
                    </p>
                    <p>
                        <i class="inverted grey user outline big link icon" style = {{marginTop:'20px'}}></i>                    
                    </p>
                </div>
        </div>
    );
}

export default Sidebar

