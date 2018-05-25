import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {result: 0, num1: "", num2: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange(event) {
    let num1 = event.target.value ? parseInt(event.target.value) : "";
    this.setState({num1});
  }

  handleChange2(event) {
    let num2 = event.target.value ? parseInt(event.target.value) : "";
    this.setState({num2});
  }

  add(event) {
    event.preventDefault();
    let result = this.state.num1 + this.state.num2;
    this.setState({result});
  }

  mult(event) {
    event.preventDefault();
    let result = this.state.num1 * this.state.num2;
    this.setState({result});
  }

  subtract(event) {
    event.preventDefault();
    let result = this.state.num1 - this.state.num2;
    this.setState({result});
  }

  divide(event){
    event.preventDefault();
    let result = this.state.num1 / this.state.num2;
    this.setState({result});
  }

  clear(event){
    event.preventDefault();
    this.setState({result:0, num1:"",num2:""});
  }

  render() {
    let {result, num1,num2} = this.state;
    return (
      <div>
        <h1>{result}</h1>
          <input type="text" onChange={this.handleChange} value={num1}/>
          <input type="text" onChange={this.handleChange2} value={num2}/>
          <br/>
          <button onClick={this.add.bind(this)}>add</button>
          <button onClick={this.subtract.bind(this)}>subtract</button>
          <button onClick={this.mult.bind(this)}>multiply</button>
          <button onClick={this.divide.bind(this)}>divide</button>
          <button onClick={this.clear.bind(this)}>clear</button>
      </div>

    );
  }
}

export default Calculator;
