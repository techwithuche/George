import React from 'react'
import {Navbar, Nav} from "react-bootstrap"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectToken,
} from '../Others/App/selectors';
import SignOut from './signout'

const Header = ({ token, logoutRequest, ...rest }) => {
  if (token) return (<>

  <Navbar bg="dark" variant="dark">
 
    <Nav className="mr">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/entertainment">Entertainment</Nav.Link>
      <Nav.Link href="/health">Health</Nav.Link>
      <Nav.Link href="/lifestyle">Lifestyle</Nav.Link>
      <Nav.Link href="/fashion">Fashion</Nav.Link>
      <Nav.Link href={'/profile'}>Profile</Nav.Link>  
    </Nav>
   
  </Navbar>
 
  </>);
  delete rest.component; // eslint-disable-line no-param-reassign
  return (
    <>
    <Navbar bg="dark" variant="dark">
 
 <Nav className="mr">
   <Nav.Link href="/">Home</Nav.Link>
   <Nav.Link href="/entertainment">Entertainment</Nav.Link>
   <Nav.Link href="/health">Health</Nav.Link>
   <Nav.Link href="/fashion">Fashion</Nav.Link>
   <Nav.Link href="/lifestyle">Lifestyle</Nav.Link>
   
 </Nav>

</Navbar>
    </>
  );
};

Header.propTypes = {
  token: PropTypes.string.isRequired,
  
};

const mapStateToProps = createStructuredSelector({
  token: makeSelectToken(),
  
});

export default connect(mapStateToProps)(Header);


