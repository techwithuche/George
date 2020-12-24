import React from 'react';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  makeSelectRelatedBlogsIsLoading,
  makeSelectRelatedBlogs,
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
    loadRelatedBlogsRequest: PropTypes.func.isRequired,
    blogs: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.clearOne();
    this.props.loadRelatedBlogsRequest(this.props.related);
  }

  render() {
    
    return (
      <>
     
      <div className="sidebar-box">
             <h3 className="heading">Related Articles</h3>
             <div className="post-entry-sidebar">
               <ul>
     {this.props.blogs
                 ? this.props.blogs.slice(0, 3).map(related => {
                   return(
                    <li key ={related._id} >
                    <a href={`/${related.slug_url}`}>
                    <img
                      src={related.thumbnail}
                      alt="ajeboblog"
                      className="mr-4"
                    />
                      <div className="text">
                            <h4>{related.title.substring(0, 70) + '...'}</h4>
                        <div className="post-meta">
                          <span className="mr-2">{moment(related.published_on).format('MMM Do YYYY')}</span>
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
    loading: makeSelectRelatedBlogsIsLoading(),
    blogs: makeSelectRelatedBlogs(),
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
