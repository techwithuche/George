import Authors from '../../src/containers/static/about/author'
import profile from '../../src/containers/admin/profile'
import { withRouter } from 'next/router'
import { compose } from 'redux'
import Login from '../signin/index'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectToken,
} from '../../src/Others/App/selectors';

const Author = ({ token, post, logoutRequest, ...rest }) => {
    if (token) return (
    <>
    <Authors post = {post} />
     </>
      );
      delete rest.component; // eslint-disable-line no-param-reassign
      return (
        <>
        <Login/>
        </>
      )
}

Author.getInitialProps = (context) => {
  let { query } = context
  const data = query.slug
 
  return {
    post: data
  }
}
 
  
 
  const mapStateToProps = createStructuredSelector({
    token: makeSelectToken(),
  });
  
  const withConnect = connect(
    mapStateToProps,
  );

  export default compose(withRouter, withConnect )(Author);
