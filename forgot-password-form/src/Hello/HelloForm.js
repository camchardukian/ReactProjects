import React from "react"
import './index.css'
import { Button, Container } from "@material-ui/core";


function handleClick() {
    console.log('The password has been resent.')
}

class HelloForm extends React.Component {
    render() { 
        return (
            <Container maxwidth="md">
            <h2>Password ran off to the beach?</h2>
            <img className="image"
            src=
            {'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fcameronchardukian.com%2Fwp-content%2Fuploads%2F2017%2F11%2FIMG_4025-1024x1024.jpg&f=1'}
            alt="randomImage"/>
                <form> 
                    
                    <h4 className="subtitle">Let's call it back to the office.</h4>
                    <h5> Enter your email, and we'll send you a reset link.</h5>
                    <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" placeholder="janedoe@example.com"> 
                   
                    </input>
                
                    </div>
                    
<Button variant = "contained" color = "secondary" onClick={handleClick}>
Send Reset Link 
</Button>
</form>
</Container>
        )
}
}

export default HelloForm