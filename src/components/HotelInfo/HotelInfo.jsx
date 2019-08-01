import React from 'react';
import Type from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {},
  imgWrapper: {
    marginTop: 10,
    marginBottom: 10,
  },
  img: {},
  title: {},
  city: {},
});

const HotelInfo = props => {
  const styles = useStyles();
  const {
    hotel: { name, images, city, description, stars },
  } = props;

  return (
    <div className={styles.root}>
      <Typography className={styles.title} gutterBottom variant="h2" component="h2" title={name}>
        {name}
      </Typography>
      <Typography className={styles.city} variant="body2" color="textSecondary" component="div">
        {city}
      </Typography>
      <Rating name="size-medium" value={Number(stars)} size="medium" readOnly />
      <div className={styles.imgWrapper}>
        <img src={images[0]} alt={name} />
      </div>
      <Typography className={styles.city} variant="body1" component="p">
        {description}
      </Typography>
    </div>
  );
};

HotelInfo.propTypes = {
  hotel: Type.shape({
    id: Type.string.isRequired,
    name: Type.string.isRequired,
    city: Type.string.isRequired,
    description: Type.string.isRequired,
    images: Type.arrayOf(Type.string).isRequired,
    stars: Type.string.isRequired,
  }).isRequired,
};

export default HotelInfo;
