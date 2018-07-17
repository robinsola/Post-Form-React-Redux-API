import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import PostsForm from './components/PostsForm';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">REACT-REDUX FETCH API PRACTICE</h1>
          </header>
          <PostsForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
