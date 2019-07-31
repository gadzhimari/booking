import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from '../../containers';

const HomeRoute = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  );
};

export default HomeRoute;
