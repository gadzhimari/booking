import React, { Component } from 'react';

class Hotel extends Component {
  state = {
    isActive: true,
  };

  render() {
    const { isActive } = this.state;
    return (
      <div>
        Hotel page
        {isActive}
      </div>
    );
  }
}

export default Hotel;
