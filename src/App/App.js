import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../components/pages/Auth/Auth';
import EditItem from '../components/pages/EditItem/EditItem';
import Home from '../components/pages/Home/Home';
import MyNavbar from '../components/pages/MyNavbar/MyNavbar';
import NewItem from '../components/pages/NewItem/NewItem';
import SingleItem from '../components/pages/SingleItem/SingleItem';

import fbConnection from '../helpers/data/connection';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Hoarder App</h2>
        <button className="btn btn-info">Keep</button>
      </div>
    );
  }
}

export default App;
