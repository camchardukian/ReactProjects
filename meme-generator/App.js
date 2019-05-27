import React from "react"
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            sampleState: "Your sample state is here"
        }
    }

    
    
    // insert class methods here
    
    
    
    render () {
        return (
            <h1> {this.state.sampleState} </h1>
        )
    }
    
    
}

export default App