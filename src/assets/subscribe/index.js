import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'connected-next-router';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import {
  makeSelectEmail,
  makeSelectEmailError,
  makeSelectSuccess,
  makeSelectLoading,
} from './selectors';
import * as mapDispatchToProps from './actions';
import reducer from './reducer';
import saga from './saga';



class Subscribe extends Component {
    static propTypes = {
        setStoreValue: PropTypes.func.isRequired,
        errors: PropTypes.string,
        email: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired,
      };
    
      handleChange = name => e => {
        e.persist();
        this.props.clearQuery();
        this.props.setStoreValue({ key: name, value: e.target.value });
      };
    
      handleSubmit = e => {
        e.preventDefault();
        this.props.saveSubscriberRequest();
      };
    
      render() {
        const { email, errors, loading } = this.props;
        const hasError = Boolean(errors);
    return (
        <div>
           <div className="site-section bg-lightx">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-5">
            <div className="subscribe-1 ">
              <h2>Subscribe to our newsletter</h2>
              <p className="mb-5">Subscribe to our newsletter and get notification about new updates, information news, etc.</p>
              <form onSubmit={this.handleSubmit} className="d-flex">
                <input type="text   " className="form-control"  placeholder="Enter your email address" value={email}
                                 onChange={this.handleChange('email')}/>
                <input type="submit" className="btn btn-primary" value="Subscribe"/>
                <div id="component-error-text">{errors}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div> 
        </div>
    )
}
}

const mapStateToProps = createStructuredSelector({
    email: makeSelectEmail(),
    errors: makeSelectEmailError(),
    success: makeSelectSuccess(),
    loading: makeSelectLoading(),
    });
    
    const withConnect = connect(
    mapStateToProps,
    { ...mapDispatchToProps, push },
    );
    
    const withReducer = injectReducer({ key: 'subscriberPage', reducer });
    const withSaga = injectSaga({ key: 'subscriberPage', saga });
    
    export default compose(
    withReducer,
    withSaga,
    withConnect,
    )(Subscribe);
