import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home, CreateNewLocation, PageNotFound } from './Containers';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import 'bulma/sass/utilities/_all.sass';

const Routes = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: CreateNewLocation,
    path: '/location/create',
    exact: true,
  },
  // Add new paths here
  {
    component: PageNotFound,
    path: '/*',
  }
];

function App() {
  return (
    <Router>
      <Switch>
        {Routes.map(route => <Route {...route} />)}
      </Switch>
    </Router>
  );
}

export default App;
