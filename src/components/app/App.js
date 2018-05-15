import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'Greg',
        city: 'Minneapolis'
      }
    };

    //makes 'this' in handleChange the same as
    //'this' in the constructor
    //similar to const self = this
    // this.handleChange = this.handleChange.bind(this);
  }


  handleChange = (event) => {
    // console.log('input was changed');
    console.log('event.target', event.target.value);


    // this.state.use = event.target.value;
    this.setState({
      user: {
        ...this.state.user,
        name: event.target.value,
      }
    });
  };

  cityChange = (event) => {
    console.log('event.target', event.target.value);

    this.setState({
      user: {
        ...this.state.user,
        city: event.target.value,
      }
    });
  };

  logIt = () => {
    console.log(this.state.user);
  };

  render() {
    return (
      <div>
        The current user is {this.state.user.name} and s/he is from {this.state.user.city}
        <input onChange={this.handleChange} placeholder="Username" />
        <input onChange={this.cityChange} placeholder="City" />
        <button onClick={this.logIt}>Submit</button>
      </div>
    );
  }
}

export default App;
