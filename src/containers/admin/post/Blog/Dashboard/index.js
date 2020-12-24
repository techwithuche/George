import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import {  makeSelectEntertainmentList,
  makeSelectLoading,
  } from './selectors';
import * as mapDispatchToProps from './actions';
import RenderBlogs from '../../../../category/component/dashboard'
import Header from '../../../../../assets/Header'
import injectSaga from '../../../../../utils/injectSaga';
import injectReducer from '../../../../../utils/injectReducer';
import reducer from './reducer';
import saga from './saga';


export class EntertainmentListList extends React.Component {

  static propTypes = {
    loadEntertainmentListRequest: PropTypes.func.isRequired,
    entertainmentList: PropTypes.object,
  };

  componentDidMount() {
    this.props.loadEntertainmentListRequest();
  }

  handlePagination = paging => {
    this.props.loadEntertainmentListRequest(paging);
  };

  render() {
    const {
      entertainmentList: { data, page, size, totaldata },
      loading,
    } = this.props;
    const pagination = { page, size, totaldata };

  return (
      <>
      <Header/>
     
      <div className="site-section">
        <br/><br/>      
        <div className="container">
            <div className="row mb-5">
               <div className="col-12">
               <h2>Dashboard</h2> 
               </div>
            </div>
            <div className="row">

            <RenderBlogs
              loading={loading}
              currentBlogs={data}
              pagination={pagination}
              handlePagination={this.handlePagination}
            />



           </div>
       </div>
      </div>
    
   </>
      );
    }
  }
  const mapStateToProps = createStructuredSelector({
    entertainmentList: makeSelectEntertainmentList(),
    loading: makeSelectLoading(),
  });
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );

  
  const withReducer = injectReducer({ key: 'blogPage', reducer });
  const withSaga = injectSaga({ key: 'blogPage', saga });
  

  export default compose(withConnect, withReducer, withSaga)(EntertainmentListList);
