import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import * as mapDispatchToProps from './actions';
import NameInput from './components/NameInput';
import EmailInput from './components/EmailInput';
import PasswordInput from './components/PasswordInput';
import { makeSelectLoading } from './selectors';


const SignupUserPage = ({
  signupRequest,
  loading,
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    signupRequest();
  };

    return (
        <div>
		 <div className="container-login100">
		 <div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
			<form onSubmit={handleSubmit} className="login100-form validate-form">
				<span className="login100-form-title p-b-37">
					Create Account
				</span>
				<NameInput />
        	    <EmailInput />
          		<PasswordInput />
<br/>

				<div className="container-login100-form-btn">
					<button className="login100-form-btn">
					{loading ?  <div className="btn_loading"><div></div><div></div><div></div><div></div><span className="ml-2">Create</span></div> : 'Sign Up'}
					</button>
				</div>

			</form>

			
		</div>
		</div>
        </div>
     );
	};
	
	SignupUserPage.propTypes = {
	  signupRequest: PropTypes.func.isRequired,
	};
	
	const mapStateToProps = createStructuredSelector({
	  loading: makeSelectLoading(),
	});
	
	const withConnect = connect(
	  mapStateToProps,
	  mapDispatchToProps,
	);
	
	const withReducer = injectReducer({ key: 'signupUserPage', reducer });
	const withSaga = injectSaga({ key: 'signupUserPage', saga });
	
	export default compose(
	  withReducer,
	  withSaga,
	  withConnect,
	)(SignupUserPage);
	