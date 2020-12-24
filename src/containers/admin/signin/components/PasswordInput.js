import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeSelectPassword, makeSelectPasswordError } from '../selectors';
import * as mapDispatchToProps from '../actions';

const PasswordInput = props => {
  const { password, setStoreValue, errors, classes } = props;
  const [isSecure, setIsSecure] = useState();

  const handleTogglePassword = () => {
    setIsSecure(state => !state);
  };

  const handleChange = e =>
    setStoreValue({ key: 'password', value: e.target.value });
  const hasError = Boolean(errors);
  return (
    <>
    <div className="wrap-input100 validate-input m-b-25" data-validate = "Enter password">
        <input
          error={hasError.toString()}
          onChange={handleChange}
          value={password}
          id="Password"
          type={isSecure ? 'text' : 'password'}
          className="input100"
          placeholder="Enter password"
        />
        <span className="focus-input100">
        
        </span>
       

      
      
    </div>
    {errors && <div id="component-error-text">{errors}</div>}
    </>
  );
};

PasswordInput.propTypes = {
  password: PropTypes.string.isRequired,
  setStoreValue: PropTypes.func.isRequired,
  errors: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  password: makeSelectPassword(),
  errors: makeSelectPasswordError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const styles = theme => ({
  EyeIcon: { position: 'absolute', right: 10, bottom: 18},
});

const withStyle = withStyles(styles);

export default compose(
  withConnect,
  withStyle,
)(PasswordInput);
