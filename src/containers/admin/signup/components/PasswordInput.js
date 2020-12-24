import React, { useState } from 'react';
import Proptypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeSelectPassword, makeSelectPasswordError } from '../selectors';
import * as mapDispatchToProps from '../actions';

const PasswordInput = props => {
  const { password, setStoreValue, error, classes } = props;
  const [isSecure, setIsSecure] = useState();

  const handleTogglePassword = () => {
    setIsSecure(state => !state);
  };

  const handleChange = e =>
    setStoreValue({ key: 'password', value: e.target.value });
  const hasError = Boolean(error);
  return (

    <div className="wrap-input100 validate-input m-b-25" data-validate = "Enter password">
					<input
          error={error || hasError.toString()}
          onChange={handleChange}
          value={password}
          id="Password"
          type={isSecure ? 'text' : 'password'}
          className="input100"
          placeholder="Enter password"
        />
					<span className="focus-input100"></span>
         
        {error && <div id="component-error-text">{error}</div>}
				</div>


			//	<div className="wrap-input100 validate-input m-b-25" data-validate = "Confirm password">
				//	<input className="input100" type="password" name="confirmpassword"  onChange={this.onConfirmPasswordChange} placeholder="Confirm password"/>
					//<span className="focus-input100"></span>
				//</div>
   
  );
};

PasswordInput.propTypes = {
  password: PropTypes.string.isRequired,
  setStoreValue: PropTypes.func.isRequired,
  error: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  password: makeSelectPassword(),
  error: makeSelectPasswordError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const styles = theme => ({
  EyeIcon: { position: 'absolute', right: 5, bottom: 18 },
});

const withStyle = withStyles(styles);

export default compose(
  withConnect,
  withStyle,
)(PasswordInput);
