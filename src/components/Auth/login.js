import React from "react";
import NavBar from "../navbar";


class Login extends React.Component {

  render() {
    return (
      <NavBar currentPath={this.props.location.pathname}/>
    )
  }
}

export default Login;