import React, {Component} from 'react';
import {connect} from 'react-redux';


class App extends Component {
  render() {
    return (
      <div>
        <h3>App</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
)(App);
