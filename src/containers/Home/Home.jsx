import React, { Component } from 'react';
import bg from '../../assets/images/bg.jpg';
import styles from './Home.module.scss';

class Home extends Component {
  state = {
    isActive: true,
  };

  render() {
    const { isActive } = this.state;
    return (
      <div>
        <div className={styles.hero}>
          <img className={styles.bg} src={bg} alt="background" />
        </div>
        {isActive}
      </div>
    );
  }
}

export default Home;
