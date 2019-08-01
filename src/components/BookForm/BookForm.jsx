import React, { useState } from 'react';
import Type from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { KeyboardDatePicker } from '@material-ui/pickers';
import addDays from 'date-fns/addDays';
import compareDesc from 'date-fns/compareDesc';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
  },
  dateRange: {
    marginTop: 8,
    marginBottom: 8,
  },
  date: {
    marginTop: 16,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const BookForm = props => {
  const styles = useStyles();
  const { onSubmit } = props;
  const dateStart = new Date();
  const dateEnd = addDays(dateStart, 1);
  const [checkInDate, setCheckInDate] = useState(dateStart);
  const [checkOutDate, setCheckOutDate] = useState(dateEnd);

  const handleSubmit = () => {
    onSubmit({ checkInDate, checkOutDate });
  };

  const handleCheckInDate = date => setCheckInDate(date);
  const handleCheckOutDate = date => setCheckOutDate(date);
  const isValidSelectedDates = () => compareDesc(checkInDate, checkOutDate) === 1;

  return (
    <Paper className={styles.root}>
      <Typography variant="h5" gutterBottom>
        Book hotel
      </Typography>

      <div className={styles.dateRange}>
        <KeyboardDatePicker
          autoOk
          inputVariant="outlined"
          label="Check-in"
          format="MM/dd/yyyy"
          value={checkInDate}
          InputAdornmentProps={{ position: 'start' }}
          onChange={handleCheckInDate}
          className={styles.date}
          disablePast
        />

        <KeyboardDatePicker
          autoOk
          inputVariant="outlined"
          label="Checkout"
          format="MM/dd/yyyy"
          value={checkOutDate}
          InputAdornmentProps={{ position: 'start' }}
          onChange={handleCheckOutDate}
          minDate={addDays(checkInDate, 1)}
          className={styles.date}
        />
      </div>

      <Button
        variant="contained"
        color="primary"
        className={styles.button}
        onClick={handleSubmit}
        disabled={!isValidSelectedDates()}
      >
        Book
      </Button>
    </Paper>
  );
};

BookForm.propTypes = {
  onSubmit: Type.func.isRequired,
};

export default BookForm;
