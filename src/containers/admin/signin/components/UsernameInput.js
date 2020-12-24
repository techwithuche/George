import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectEmail, makeSelectEmailError } from '../selectors';
import * as mapDispatchToProps from '../actions';

const EmailInput = props => {
  const { email, setStoreValue, errors } = props;
  const handleChange = e =>
    setStoreValue({ key: 'email', value: e.target.value });
  const hasError = Boolean(errors);
  return (
    
<div className="wrap-input100 validate-input m-b-20" data-validate="Enter mobileor email">
{errors && <div id="component-error-text">{errors}</div>}
<input
        error={hasError.toString()}
        onChange={handleChange}
        value={email}
        className="input100"
        id="username"
        type="text"
        placeholder="Enter mobile or email"
      />
					<span className="focus-input100"></span>
          
</div>


  );
};

EmailInput.propTypes = {
  email: PropTypes.string.isRequired,
  setStoreValue: PropTypes.func.isRequired,
  errors: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  errors: makeSelectEmailError(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmailInput);
