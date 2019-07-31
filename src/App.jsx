import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomeRoute, HotelRoute } from './routes';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={HomeRoute} />
        <Route exact path="/hotel" component={HotelRoute} />
      </div>
    </Router>
  );
}

export default App;
