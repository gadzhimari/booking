import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Hotel } from '../../containers';

const HotelRoute = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Route exact path="/hotel" component={Hotel} />
    </div>
  );
};

export default HotelRoute;
