import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state ={
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    }
    
    render() {
        return (
            <div>
            <h1>MEME GENERATOR SECTION</h1>
            <h2> Let's test to make sure state is working properly by displaying the current state of this.state.randomImage. If we are successful, we should see an image URL here --> {this.state.randomImage} </h2>
            </div>
        )
    }
}

export default MemeGenerator