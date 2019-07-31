import React, { Component } from 'react';
import { SearchInput } from '../../components';
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
          <div className={styles.inputWrapper}>
            <SearchInput
              placeholder="Search hotels"
              inputProps={{ 'aria-label': 'Search Hotels' }}
            />
          </div>
          <img className={styles.bg} src={bg} alt="background" />
        </div>
        {isActive}
      </div>
    );
  }
}

export default Home;
