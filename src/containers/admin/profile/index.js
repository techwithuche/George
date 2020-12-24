import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-next-router';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import {
  makeSelectOne,
  makeSelectCategory,
  makeSelectLoading,
  makeSelectErrors,
} from './selectors';
import Name from './components/Name';
import Email from './components/Email';
import Bio from './components/Bio';
import Avatar from './components/Avatar';
import * as mapDispatchToProps from './actions';


class AddEdit extends React.PureComponent {
  static propTypes = {
    loadOneRequest: PropTypes.func.isRequired,
    loadUsersRequest: PropTypes.func.isRequired,
    loadCategoryRequest: PropTypes.func.isRequired,
    addEditRequest: PropTypes.func.isRequired,
    setOneValue: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    one: PropTypes.object.isRequired,
    category: PropTypes.array,
    tempTag: PropTypes.string,
    push: PropTypes.func.isRequired,
  };



  componentDidMount() {
		this.props.clearOne();
		this.props.clearErrors();
		  this.props.loadOneRequest(this.props.post);
	
	  }

    

  handleSave = e => {
    e.preventDefault();
    this.props.addEditRequest();
    
  };


  render() {
   
    const {
      classes,
      one,
      category,
      users,
      tempTag,
      tempMetaTag,
      tempMetaKeyword,
      match,
      loading,
      errors,
    } = this.props;
    
   
   
    return loading && loading == true ? (
    <>
    </>
    ) :
     (
    <>

<div className="container-login100">
		<div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
		
			<form onSubmit={this.handleSave} className="login100-form validate-form">
				<span className="login100-form-title p-b-37">
			Profile
				</span>
                <Name/>
               <Email/>
               <Bio />
               <Avatar />
              
              
               
                <br/>

				<div className="container-login100-form-btn">
					<button  className="login100-form-btn">
                       Edit
					</button>
				</div>	

			</form>

			
		</div>
		</div>
        

    </>
    );
  }
}

const withReducer = injectReducer({ key: 'blogManagePage', reducer });
const withSaga = injectSaga({ key: 'blogManagePage', saga });

const mapStateToProps = createStructuredSelector({
  one: makeSelectOne(),
  category: makeSelectCategory(),
  loading: makeSelectLoading(),
  errors: makeSelectErrors(),
});

const withConnect = connect(
  mapStateToProps,
  { ...mapDispatchToProps, push },
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AddEdit);
