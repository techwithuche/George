import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import saga from './saga';
import reducer from './reducer';
import {
  makeSelectIsRequesting,
  makeSelectSuccess,
  makeSelectErrorMsg,
  makeSelectContactDetail,
} from './selectors';
import * as mapDispatchToProps from './actions';
import Header from '../../../assets/Header'
import Footer from '../../../assets/Footer'

class ContactUs extends React.Component {
    state = { name: '', email: '', subject: '', message: '', reCaptcha: '' };

  
    handleChange = name => event => {
      this.setState({ [name]: event.target.value });
    };
  
    UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.success !== this.props.success && nextProps.success) {
        this.setState({ name: '', email: '', subject: '', message: '' }, () => {
          window.grecaptcha && window.grecaptcha.reset();
        });
      }
    }
  
    handleSave = () => {
      this.props.saveContactRequest(this.state);
    };

  
    onChange = e => {
      this.setState({
        reCaptcha: e,
      });
    };
  
    render() {
      const { isRequesting, contactDetail } = this.props;
      const { name, email, subject, message } = this.state;

    return (
        <div>
          <Header/>
        <div className="site-cover site-cover-sm same-height overlay single-page">
      <div className="container">
        <div className="row same-height justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="post-entry text-center">
              <h1 className="">Contact Us</h1>
              <p className="lead mb-4 text-white">Get in contact with us in our various channels to share news tips,
               information, photos about a news story or press release with our editors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    <div className="site-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-7 mb-5">

            

            <form action="/" method="post" className="p-5 bg-white">
             

              <div className="row form-group">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="text-black" for="fname">Name</label>
                  <input type="text" id="contact-name" className="form-control" value={name}
                                                             onChange={this.handleChange('name')} />
                </div>
              </div>

              <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="text-black" for="email">Email</label> 
                  <input type="email" id="email" className="form-control" value={email}
                                                            onChange={this.handleChange('email')} />
                </div>
              </div>

              

              <div className="row form-group">
                <div className="col-md-12">
                  <label className="text-black" for="message">Message</label> 
                  <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Write your notes or questions here..." value={message}
                                                            onChange={this.handleChange('message')}></textarea>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <button type="submit" disabled={isRequesting} onClick={this.handleSave} className="btn btn-primary py-2 px-4 text-white"> Send  </button>    
                </div>
              </div>

  
            </form>
          </div>
          <div className="col-md-5">
            
            <div className="p-4 mb-3 bg-white">
              <p className="mb-0 font-weight-bold">Address</p>
              <p className="mb-4">Aggrey Housing Estate, Port-Harcourt Nigeria </p>

              <p className="mb-0 font-weight-bold">Phone</p>
              <p className="mb-4"><a href="/">+234 905 550 5775</a></p>

              <p className="mb-0 font-weight-bold">Email Address</p>
              <p className="mb-0"><a href="/">info@ajebonews.com</a></p>

            </div>

          </div>
        </div>
      </div>
    </div>
        <Footer/>
      </div>
    )
}
}

ContactUs.propTypes = {
    saveContactRequest: PropTypes.func.isRequired,
    ContactDetailRequest: PropTypes.func.isRequired,
  };
                                                        
  const mapStateToProps = createStructuredSelector({
    isRequesting: makeSelectIsRequesting(),
    success: makeSelectSuccess(),
    error: makeSelectErrorMsg(),
    contactDetail: makeSelectContactDetail(),
  });
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );
  
  const withReducer = injectReducer({ key: 'contactUs', reducer });
  const withSaga = injectSaga({ key: 'contactUs', saga });
 
  
  export default compose(
    withReducer,
    withSaga,
    withConnect,
  )(ContactUs);