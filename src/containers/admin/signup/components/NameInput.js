import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectName, makeSelectNameError } from '../selectors';
import * as mapDispatchToProps from '../actions';

const NameInput = props => {
  const { name, setStoreValue, error } = props;
  const handleChange = e =>
    setStoreValue({ key: 'name', value: e.target.value });
  const hasError = Boolean(error);
  return (

    <div className="wrap-input100 validate-input m-b-20" data-validate="Enter fullname">
					<input
        error={hasError.toString()}
        onChange={handleChange}
        value={name}
        className="input100"
        type="text"
        autoFocus  placeholder="Enter fullname"
      />
					<span className="focus-input100"></span>
			 {error && <div id="component-error-text">{error}</div>}
    </div>
  );
};

NameInput.propTypes = {
  name: PropTypes.string.isRequired,
  setStoreValue: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  name: makeSelectName(),
  error: makeSelectNameError(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NameInput);
