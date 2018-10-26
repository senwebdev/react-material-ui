import 'normalize.css';
import './scss/app.scss'

import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header'

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <h1>Hello {this.props.name}</h1>
        </div>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="X" />, mountNode);