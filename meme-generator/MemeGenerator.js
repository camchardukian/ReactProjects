import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => {
            this.setState({allMemeImgs: data})
            console.log(this.state.allMemeImgs)
            /* above console.log is to verify (until we get further along in the project) that I successfully set the state of allMemeImgs to the data we got back from our API call.
            */
        })
    }
    
    render() {
        return (
          
            <h1>MEME GENERATOR SECTION</h1>
        )
    }
}

export default MemeGenerator