import React, { Component } from 'react'
import  { withRouter } from 'next/router'
import Head from 'next/head'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as mapDispatchToProps from '../../category/utils/actions';
import { makeSelectLoading, makeSelectBlogByAuthor, makeSelectInfo } from '../../category/utils/selectors';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import reducer from '../../category/utils/reducer';
import saga from '../../category/utils/saga';
import Header from '../../../assets/Header'
import Footer from '../../../assets/Footer'
import RenderBlogs from '../../category/component/render'

class Post extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    loadBlogByAuthorRequest: PropTypes.func.isRequired,
    loadInfoRequest: PropTypes.func.isRequired,
    author: PropTypes.shape({}).isRequired,
    
  };


  
  componentDidMount() {
    this.props.clearOne(); 
      this.props.loadBlogByAuthorRequest(this.props.post);
      this.props.loadInfoRequest()

  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.post !== this.props.post) {
      this.props.loadBlogByAuthorRequest(nextProps.post);
    }
  }


  render() {
    const { info } = this.props
    const {
      author: { data, page, size, totaldata },
      loading,
    } = this.props;
    const pagination = { page, size, totaldata };
    return (
      
!data ? (
<>
<Header/>
    <Head>
        <title>Author Not Found</title>
    </Head>
    <Footer/>
</>
) : (
<div>
<Header/>
<div className="site-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-md-2">
            <img src={info.avatar} alt="Image" className="img-fluid"/>
          </div>
          <div className="col-md-5 mr-auto order-md-1 text-center">
            
          <h2>{info.name}</h2>
              <h4>{info.bio}</h4>
          </div>
        </div>
      </div>
    </div>
   
   <div className="site-section">
   <div className="container">
   <div className="row mb-5 justify-content-center">
     <div className="col-md-5 text-center">
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

<Footer/>
</div>
      
    ))
    }
}


const mapStateToProps = createStructuredSelector({
  author: makeSelectBlogByAuthor(),
  info: makeSelectInfo(),
  loading: makeSelectLoading(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
  );
  
  const withReducer = injectReducer({ key: 'blogPage', reducer });
  const withSaga = injectSaga({ key: 'blogPage', saga });
  
  

  export default compose(withRouter, withConnect, withReducer, withSaga)(Post);