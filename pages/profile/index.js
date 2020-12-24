import Profile from '../../src/containers/admin/profile'
import { withRouter } from 'next/router'
import { compose } from 'redux'
import Login from '../signin/index'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectToken,
} from '../../src/Others/App/selectors';

const Edit = ({ token, post, logoutRequest, ...rest }) => {
    console.log(`parameter:`, post)
    if (token) return (
    <>
    <Profile post = {post} />
     </>
      );
      delete rest.component; // eslint-disable-line no-param-reassign
      return (
        <>
        <Login/>
        </>
      )
}

Edit.getInitialProps = (context) => {
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

  export default compose(withRouter, withConnect )(Edit);
