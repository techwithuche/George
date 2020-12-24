import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { logoutRequest } from '../Others/App/actions';

/* eslint-disable react/prefer-stateless-function */
export class signoutrequest extends React.PureComponent {
  render() {
    return (
      <>
        
         
         <Button onClick={() => this.props.logoutRequest()}>
            Logout
          </Button>

        
      </>
    );
  }
}

signoutrequest.propTypes = {
  logoutRequest: PropTypes.func.isRequired,
};

export default connect(
  null,
  { logoutRequest },
)(signoutrequest);
