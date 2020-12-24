import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login'
import withStyles from '@material-ui/core/styles/withStyles';
import { createStructuredSelector } from 'reselect';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import UsernameInput from './components/UsernameInput';
import PasswordInput from './components/PasswordInput';
import reducer from './reducer';
import saga from './saga';
import * as mapDispatchToProps from './actions';
import {
  makeSelectLoading,
  makeSelectEmailError,
  makeSelectPasswordError,
} from './selectors';



const signin = ({
	classes,
	loginRequest,
	loginWithFbRequest,
	loginWithGoogleRequest,
	loading,
	emailErr,
	passwordErr,
  }) => {
	const handleSubmit = e => {
	  e.preventDefault();
	  loginRequest();
	};

	const styling = {
		backgroundImage: `url('./images/bg-01.jpg')`,
		width:"100%",
		height:"100%"
	}
    return (
        <div>
         
		 <div className="container-login100" style={styling}>
		<div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
		
			<form onSubmit={handleSubmit} className="login100-form validate-form">
				<span className="login100-form-title p-b-37">
					Welcome Back
				</span>

				<UsernameInput/>

				<PasswordInput/>

				<div className="container-login100-form-btn">
					<button className="login100-form-btn" type="submit">
					{loading ?  <div className="btn_loading"><div></div><div></div><div></div><div></div><span className="ml-2">Login</span></div> : 'Login'}
					</button>
				</div>

				
				<div className="flex-c p-b-112">
				</div>
				</form>

			
		</div>
		</div>
        </div>
    )
}



signin.propTypes = {
	classes: PropTypes.object.isRequired,
	loginRequest: PropTypes.func.isRequired,
	loginWithFbRequest: PropTypes.func.isRequired,
	loginWithGoogleRequest: PropTypes.func.isRequired,
  };

  const mapStateToProps = createStructuredSelector({
	loading: makeSelectLoading(),
	emailErr: makeSelectEmailError(),
	passwordErr: makeSelectPasswordError(),
  });

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
  );


const withReducer = injectReducer({ key: 'loginUserPage', reducer });
const withSaga = injectSaga({ key: 'loginUserPage', saga });

const styles = {
	googbtn: {
	  boxShadow: 'none!important',
	  border: '1px solid gainsboro!important',
	  borderLeft: 'none!important',
	},
  };
  
  const withStyle = withStyles(styles);

export default compose(
	withStyle,
	withReducer,
	withSaga,
	withConnect,
  )(signin);