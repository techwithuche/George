import DeleteBlog from '../../../src/containers/admin/post/Blog/DeleteBlog/index'
import { withRouter } from 'next/router'
import { compose } from 'redux'
import Login from '../../signin/index'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectToken,
} from '../../../src/Others/App/selectors';

const Delete = ({ token, post, logoutRequest, ...rest }) => {
    console.log(`parameter:`, post)
    if (token) return (
    <>
    <DeleteBlog post = {post} />
     </>
      );
      delete rest.component; // eslint-disable-line no-param-reassign
      return (
        <>
        <Login/>
        </>
      )
}

Delete.getInitialProps = (context) => {
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

  export default compose(withRouter, withConnect )(Delete);
