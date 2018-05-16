import React, { Component } from 'react';

const emptyUser = {
  name: '',
  city: '',
  zip: '',
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: emptyUser,

      userList: [],

    };

    // All comments below refer to line with ***  ***
    //makes 'this' in handleChange the same as
    //'this' in the constructor
    //similar to const self = this
    //If we write the functions like they are below (e.g. handleChange) we don't need the line below (this.handleChange...)
    // *** this.handleChange = this.handleChange.bind(this);***
  }



  //Example of currying (a function that returns a function)
  //In es6, parenthesis can leave if there is one parameter
  //If the returned function is on the same line as the parent, it will automatically return the function (without return statement)
  handleChangeFor = propertyName => event => {
    this.setState({
      user: {
        ...this.state.user,
        [propertyName]: event.target.value,
      }
    });
  }

//Function below is same as function above (for reference on notes about es6)

  // handleChangeFor = (propertyName) => {
  //   return (event) => {
  //     this.setState({
  //       user: {
  //         ...this.state.user,
  //         [propertyName]: event.target.value,
  //       }
  //     });
  //   }
  // }



  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({userList: [...this.state.userList, this.state.user]});
    console.log(this.state.user);
    this.setState({
      user: emptyUser,
    });
    console.log(this.state.userList);
  };






  render() {

    let updatedUserList = this.state.userList.map(user => <li key={user.name}>{user.name} is from {user.city}, zip code {user.zip}</li>);

    return (
      <div>
        The current user is {this.state.user.name}. S/he is from {this.state.user.city}, where the zip code is {this.state.user.zip}
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.user.name} onChange={this.handleChangeFor('name')} placeholder="Username" />
          <input value={this.state.user.city} onChange={this.handleChangeFor('city')} placeholder="City" />
          <input value={this.state.user.zip} onChange={this.handleChangeFor('zip')} placeholder="Zip Code" />
          <input type="submit" value="Click me to submit form!" />
        </form>

        <ul>
          {updatedUserList}
        </ul>
      </div>
    );
  }
}

export default App;
