import React, { Component } from 'react';
import './App.css';


// 测试事件中的event参数
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : '',
      forTestValue : ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        value: event.type
      }
    )
    console.log(event);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={imagesData[0].imagesUrl} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type='text' onChange = {this.handleChange} />
        <p>{this.state.value + '</br>' + this.state.forTestValue}</p> 
      </div>
    );
  }
}




// // li 元素 基础组件
// class LiofUl extends Component {
//   render() {
//     return (
//       <li></li>
//     )
//   }
// }




export default App;
