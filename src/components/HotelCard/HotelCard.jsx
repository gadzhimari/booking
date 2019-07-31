import React, { Component } from 'react';

class HotelCard extends Component {
  state = {
    isActive: true,
  };

  render() {
    const { isActive } = this.state;

    return (
      <div>
        HotelCard
        {isActive}
      </div>
    );
  }
}

export default HotelCard;
