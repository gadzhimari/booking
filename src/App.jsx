import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { HomeRoute, HotelRoute } from './routes';
import './App.scss';

function App() {
  return (
    <Router>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className="container">
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/hotel" component={HotelRoute} />
        </div>
      </MuiPickersUtilsProvider>
    </Router>
  );
}

export default App;
