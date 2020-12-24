import React from 'react';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  makeSelectRecentBlogsIsLoading,
  makeSelectRecentBlogs,
} from '../utils/selectors';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import reducer from '../utils/reducer';
import saga from '../utils/saga';
import * as mapDispatchToProps from '../utils/actions';
import moment from "moment";
import Header from '../../../assets/Header'
import Footer from '../../../assets/Footer'

export class Home extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    loadRecentBlogsRequest: PropTypes.func.isRequired,
    blogs: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.clearOne();
    this.props.loadRecentBlogsRequest();
  }

  render() {
    
    return (
      <>
     
      <div className="sidebar-box">
             <h3 className="heading">Recent Articles</h3>
             <div className="post-entry-sidebar">
               <ul>
     {this.props.blogs
                 ? this.props.blogs.slice(4, 11).map(recent => {
                   return(
                    <li key ={recent._id} >
                    <a href={`/${recent.slug_url}`}>
                    <img
                      src={recent.thumbnail}
                      alt="ajeboblog"
                      className="mr-4"
                    />
                      <div className="text">
                            <h4>{recent.title.substring(0, 70) + '...'}</h4>
                        <div className="post-meta">
                          <span className="mr-2">{moment(recent.published_on).format('MMM Do YYYY')}</span>
                        </div>
                      </div>
                    </a>
                    
                  </li>
           );
        }
        ): 
        <div>
        
        </div>
        }
     </ul>
        
        </div>
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
