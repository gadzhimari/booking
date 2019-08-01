import React, { Component } from 'react';
import { BookForm, HotelInfo } from '../../components';
import hotels from '../Home/data';
import styles from './Hotel.module.scss';

class Hotel extends Component {
  state = {
    isActive: true,
  };

  handleSubmit = () => {};

  render() {
    const { isActive } = this.state;
    return (
      <div className={styles.root}>
        <div className={styles.content}>
          <HotelInfo hotel={hotels[2]} />
        </div>
        <div className={styles.sidebar}>
          <BookForm onSubmit={this.handleSubmit} />
        </div>
        {isActive}
      </div>
    );
  }
}

export default Hotel;
