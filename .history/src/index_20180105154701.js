import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import App from './components/App';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import reducers from './data/reducers'


const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/test" component={App}/>
      </div>

    </Router>
  </Provider>
  , document.getElementById('app'));
