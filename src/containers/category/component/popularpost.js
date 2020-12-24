import React from 'react';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  makeSelectPopularPostLoading,
  makeSelectPopularPost,
} from '../utils/selectors';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import reducer from '../utils/reducer';
import saga from '../utils/saga';
import * as mapDispatchToProps from '../utils/actions';
import moment from "moment";


export class Home extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    loadPopularPostRequest: PropTypes.func.isRequired,
    blogs: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.clearOne();
    this.props.loadPopularPostRequest();
  }

  render() {
    
    return (
      <>
     
      <div className="sidebar-box">
             <h3 className="heading">Hot Topics</h3>
             <div className="post-entry-sidebar">
               <ul>
     {this.props.blogs
                 ? this.props.blogs.slice(0, 3).map(popularpost => {
                   return(
                    <li key ={popularpost._id} >
                    <a href={`/${popularpost.slug_url}`}>
                    <img
                      src={popularpost.thumbnail}
                      alt="ajeboblog"
                      className="mr-4"
                    />
                      <div className="text">
                            <h4>{popularpost.title.substring(0, 70) + '...'}</h4>
                        <div className="post-meta">
                          <span className="mr-2">{moment(popularpost.published_on).format('MMM Do YYYY')}</span>
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
    loading: makeSelectPopularPostLoading(),
    blogs: makeSelectPopularPost(),
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
