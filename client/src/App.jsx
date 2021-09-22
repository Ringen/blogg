import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import AllPosts from './AllPosts';
import CreatePost from './CreatePost';
import OnePost from './OnePost';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/create">Create</NavLink></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact><AllPosts /></Route>
        <Route path="/create" exact><CreatePost /></Route>
        <Route path="/posts" exact><AllPosts /></Route>
        <Route path="/posts/:id"><OnePost /></Route>
      </Switch>
    </Router>
  );
}

export default App;
