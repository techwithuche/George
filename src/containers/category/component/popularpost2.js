import React from 'react';
import { connect } from 'react-redux';
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
     
     <div className="site-section bg-light">
       <div className="container">
          <div className="row mb-5">
            <div className="col-md-7">
               <h2>Trending</h2>
             </div>
          </div>
        <div className="row align-items-stretch retro-layout">
     {this.props.blogs
      ? this.props.blogs.slice(0, 3).map(popularpost => {
      return(

         <div className="col-md-5 order-md-2" key ={popularpost._id}>
          <a href={`/${popularpost.slug_url}`}
           className="hentry img-1 h-100 gradient" style={{backgroundImage: `url(${popularpost.thumbnail})`}} >
              <span className="post-category text-white bg-danger">{popularpost.category}</span>
              <div className="text">
                <h2>{popularpost.title.substring(0,70) + '...'}</h2>
                <span>{moment(popularpost.published_on).format('MMM Do YYYY')}</span>
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
