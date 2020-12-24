import React from 'react';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  makeSelectRecentBlogsIsLoading,
  makeSelectRecentBlogs,
} from '../../utils/selectors';
import injectSaga from '../../../../utils/injectSaga';
import injectReducer from '../../../../utils/injectReducer';
import reducer from '../../utils/reducer';
import saga from '../../utils/saga';
import * as mapDispatchToProps from '../../utils/actions';
import moment from "moment";
import RecentBlog from '../../component/recent'
import Popular from '../../component/popularpost'
import Header from '../../../../assets/Header'
import Footer from '../../../../assets/Footer'
import Head from 'next/head'

export class Home extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    loadRecentBlogsRequest: PropTypes.func.isRequired,
    blogs: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.clearOne();
    this.props.loadRecentBlogsRequest();
    this.props.loadPopularPostRequest();
  }

  render() {
    
    return (
      <>

<Head>
      <title> Ajeboblog | Home</title>
      <meta
      key="description"
      name="description"
      content="This is the Home of Home News"
      />


     <meta
      key="og:site_name"
      property="og:site_name"
      content="Ajeboblog"
      />

<meta
      key="og:type"
      property="og:type"
      content="website"
      />

<meta
      key="og:title"
      name="og:title"
      property="og:title"
      content="Ajeboblog | Home"
      />



    </Head>



     <div>



       <Header/>
   
   <div className="site-section">
   <div className="container">
   <div className="row">
     <div className="col-md-12 col-lg-8 ">
       <div className="row">
     {this.props.blogs
                 ? this.props.blogs.slice(0, 3).map(post => {
                   return(
                  <div className="col-md-12 col-lg-4" >
                      <a href={`/${post.slug_url}` }
                    className="h-entry mb-30 v-height gradient" style={{backgroundImage: `url(${post.thumbnail})`}} >
                      <div className="text">
                        <h3>{post.title.substring(0, 70) + '...'}</h3>
                        <span className="date">{moment(post.createdAt).format('MMM Do YYYY')}</span>
                      </div>
                      </a>
                  </div>
           );
        }
        ): 
        <div>
        
        </div>
        }
     </div>
     </div>
<br/>
   
   <div className="col-md-6 col-lg-4 mb-5">
     <br/>
   <RecentBlog/> 
   <Popular/>
     </div>
   
   </div>
   </div>
   </div>
   <Footer/>
   </div>
     
      
   </>
      
     
      );
    }
  }
  
  const mapStateToProps = createStructuredSelector({
    loading: makeSelectRecentBlogsIsLoading(),
    blogs: makeSelectRecentBlogs(),
  });
  
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );  

  
const withReducer = injectReducer({ key: 'blogPage', reducer });
const withSaga = injectSaga({ key: 'blogPage', saga });


  export default compose(
    withSaga,
    withReducer,
    withConnect)(Home);
