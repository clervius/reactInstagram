import React, { Component } from 'react';
import './App.css';
import postData from './application-data';
import { SearchBar } from './components/SearchBar';
import PostContainer from './components/PostContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      postData: []
    }
  }
  componentDidMount() {
    this.setState({
      postData: postData
    })
  }
  render() {
    return (
      <div className="mainBody">
        <PostContainer posts={this.state.postData} />
        <SearchBar />        
      </div>
    );
  }
}

export default App;
