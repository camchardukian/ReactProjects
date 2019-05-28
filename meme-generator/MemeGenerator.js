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
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({
                    allMemeImgs: memes,
                })
            })
    }
    
    handleChange(event) {
             
        const {name, value} = event.target
        this.setState({ [name]: value})
    }
    
    handleClick (event) {
        event.preventDefault();
        const randomNumber = Math.floor(Math.random()*this.state.allMemeImgs.length)
            let randomUrl;
            this.state.allMemeImgs[randomNumber]["url"] ? randomUrl = this.state.allMemeImgs[randomNumber]["url"] : randomUrl = "https://i.imgflip.com\/2cp1.jpg"
            // above code attempts to keep users busy if they click generate meme before the API call has finished loading. It's a bit of a "hacky" solution, but it's the best I can figure out as of now.
            this.setState({
                randomImg: randomUrl
            })
            
}   
    
    render() {
        return (
            <div>
                <form className="meme-form">
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    /> 
                <div>
                    <button onClick = {this.handleClick}>Gen</button>
                    </div>
                </form>
                <div className="meme">
                <img src={this.state.randomImg} alt="" />
                
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator