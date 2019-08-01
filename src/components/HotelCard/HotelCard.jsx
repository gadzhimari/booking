import React from 'react';
import Type from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {},
  img: {
    height: 0,
    paddingTop: '56.25%',
  },
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  city: {},
});

const HotelCard = props => {
  const styles = useStyles();
  const {
    hotel: { name, images, city, stars },
  } = props;

  const handleClick = () => {};

  return (
    <Card className={styles.root}>
      <CardActionArea onClick={handleClick}>
        <CardMedia className={styles.img} image={images[0]} title={name} />
        <CardContent>
          <Typography
            className={styles.title}
            gutterBottom
            variant="h6"
            component="h2"
            title={name}
          >
            {name}
          </Typography>
          <Typography className={styles.city} variant="body2" color="textSecondary" component="div">
            {city}
          </Typography>
          <Rating name="size-small" value={stars} size="small" readOnly />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

HotelCard.propTypes = {
  hotel: Type.shape({
    id: Type.string.isRequired,
    name: Type.string.isRequired,
    city: Type.string.isRequired,
    images: Type.arrayOf(Type.string).isRequired,
    stars: Type.string.isRequired,
  }).isRequired,
};

export default HotelCard;
