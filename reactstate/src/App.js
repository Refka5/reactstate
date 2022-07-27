import React, { Component } from "react";

class App extends Component {
  state = {
    fullName: "refka hlali",
    bio: "web develloper",
    imgSrc: "",
    profession: "this is my profile",
    showState: "flase",
  };
  toggleshowState = () => {
    this.setState({ showState: !this.state.showState });
  };
  render() {
    return (
      <div>
        <h1> My profile</h1>
        <button className="visibility-btn" onClick={this.toggleVisibility}>
          {this.state.showState ? "Hide person" : "Show person"}
        </button>
      </div>
    );
  }
}
export default App;
