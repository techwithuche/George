import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import { createStructuredSelector } from 'reselect';
import { makeSelectErrors, makeSelectOne } from '../selectors';
import * as mapDispatchToProps from '../actions';

const CategoryInput = props => {
  const { one, setOneValue, error } = props;
console.log(one)
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
  const handleDropDownChange = name => e => {
    e.persist();
    setOneValue({ key: name, value: e.target.value });
  }

  const hasError = Boolean(error);


  return (
<>
<div className="login100-form-special1 p-b-10">
          Category*
    </div>
    <div className="wrap-input100 validate-input m-b-20">
            

            { <FormControl>
            <select
              className="input100"
              value={(one && one.category) || ''}
              onChange={handleDropDownChange('category')}
            >
              <option value="none" >
                Enter Category
              </option>
              <option value="entertainment" >
                Entertainment
              </option>
              <option value="health">
                Health
              </option>
              <option value="lifestyle" >
                Lifestyle
              </option>
              <option value="fashion">
                Fashion
              </option>
              
            </select>
            </FormControl> }

        
          </div>
</>
  );
};

CategoryInput.propTypes = {
  
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
)(CategoryInput);
