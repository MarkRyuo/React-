import { Component } from "react";


class Class_Card extends Component{

    constructor({image, title, text}){
        super()
        this.image = image;
        this.title = title;
        this.text = text;
    }

    render(){
        <div>
            <img src={this.image} alt="" srcset="" />
            <h1>{this.title}</h1>
            <p>{this.text}</p>
        </div>
    }


}

export default Class_Card;