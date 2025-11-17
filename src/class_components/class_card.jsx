import React, { Component } from "react";

class Class_Card extends Component {
  constructor(props) {
    super(props);

  }

  

  render() {
    const {image, title, text} = this.props;

    return (
      <>
        <div>
          <img src={image} alt="" srcset="" />
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </>
    )
  }
}

export default Class_Card;
