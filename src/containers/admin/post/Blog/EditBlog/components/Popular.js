import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectErrors, makeSelectOne } from '../selectors';
import * as mapDispatchToProps from '../actions';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox, IconButton } from '@material-ui/core/';

const Popular = props => {
  const { one, setOneValue, error } = props;

  const slugify = text => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  };
  const handleCheckedChange = name => e => {
    e.persist();
    setOneValue({ key: name, value: e.target.checked});
  }

  const hasError = Boolean(error);


  return (
<>

          <FormControlLabel
            control={
              <Checkbox
                checked={(one && one.is_popular) || false}
                tabIndex={-1}
                onClick={handleCheckedChange('is_popular')}
                color="primary"
              />
            }
            label="Is Popular"
          />

 </>
    
  );
};

Popular.propTypes = {
  
  setOneValue: PropTypes.func.isRequired,
  errors: PropTypes.string,
  one: PropTypes.string
};

const mapStateToProps = createStructuredSelector({
  one: makeSelectOne(),
  errors: makeSelectErrors(),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Popular);
