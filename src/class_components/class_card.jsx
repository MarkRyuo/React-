import React, { Component } from "react";

class Class_Card extends Component {
  constructor(props) {
    super(props);
    this.state = {hasLiked: false} // state
  }

  clickedLike = () => {
    this.setState({hasLiked: !this.state.hasLiked})
  }
  

  render() {
    const {image, title, text} = this.props; // props

    return (
      <>
        <div className="max-w-3xs min-w-[200px] p-1.5">
          <img src={image} alt="" srcset="" className="rounded-2xl"/>
          <h1>{title}</h1>
          <p>{text}</p>
          <button type="button" onClick={this.clickedLike} className="border-2 rounded-[10px] p-0.5 w-full cursor-pointer">
            {this.state.hasLiked ? "Liked": "Like" } 
          </button> 
        </div>
      </>
    )
  }
}

export default Class_Card;


// Destructuring 
// Ternary 
// state 
