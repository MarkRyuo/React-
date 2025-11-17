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
        <div>
          <img src={image} alt="" srcset="" />
          <h1>{title}</h1>
          <p>{text}</p>
          <button type="button" onClick={this.clickedLike}>
            {this.state.hasLiked ? "Liked": "Like" } 
          </button> 
        </div>
      </>
    )
  }
}

export default Class_Card;
