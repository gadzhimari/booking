import React, { useState } from 'react';
import Type from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '2px 4px',
  },
  input: {
    flex: 1,
    marginLeft: 8,
  },
  iconButton: {
    padding: 10,
  },
});

const SearchInput = props => {
  const styles = useStyles();
  const [searchValue, setSearchValue] = useState('');
  const [isFetching] = useState(false);
  const { inputProps, placeholder } = props;

  const handleChange = ({ target: { value } }) => setSearchValue(value);

  const handleSearch = () => {};

  const handleKeyPress = ({ key }) => {
    if (key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Paper className={styles.root}>
      <InputBase
        fullWidth
        value={searchValue}
        className={styles.input}
        placeholder={placeholder}
        inputProps={inputProps}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <IconButton onClick={handleSearch} className={styles.spinner} aria-label="Search">
        {isFetching ? <CircularProgress size={24} /> : <SearchIcon />}
      </IconButton>
    </Paper>
  );
};

SearchInput.propTypes = {
  placeholder: Type.string /* eslint-disable react/forbid-prop-types */,
  inputProps: Type.object,
};

SearchInput.defaultProps = {
  placeholder: '',
  inputProps: {},
};

export default SearchInput;
