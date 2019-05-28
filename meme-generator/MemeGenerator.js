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
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({ allMemeImgs: memes })
            })
            this.handleChange = this.handleChange.bind(this)
    }
    
  handleChange (event) {
      const {name, value} = event.target
      this.setState({
          [name]: value
      })
  }
    
    render() {
        return (
            <div>
                <form className="meme-form">
                
                <input type = "text" name = "topText" value = {this.state.topText} onChange={this.handleChange}/>
                
                <input type = "text" name = "bottomText" value = {this.state.bottomText} onChange={this.handleChange} />
                    
                    
                
                    <button>Gen</button>
                </form>
                <p> Let's test if we implemented our inputs' onChange event handlers and handleChange method correctly. If so, when we type text in the above forms we should see it render in real-time here --> {this.state.topText} {this.state.bottomText} </p>
            </div>
        )
    }
}

export default MemeGenerator