import React from 'react';
import Type from 'prop-types';
import { HotelCard } from '..';
import styles from './HotelList.module.scss';

const HotelList = props => {
  const { hotels } = props;

  return (
    <div className={styles.root}>
      {hotels.map(hotel => (
        <div key={hotel.id} className={styles.item}>
          <HotelCard hotel={hotel} />
        </div>
      ))}
    </div>
  );
};

HotelList.propTypes = {
  hotels: Type.arrayOf(
    Type.shape({
      id: Type.string.isRequired,
      name: Type.string.isRequired,
      city: Type.string.isRequired,
      images: Type.arrayOf(Type.string).isRequired,
      stars: Type.string.isRequired,
    }),
  ).isRequired,
};

export default HotelList;
