import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { ConnectedRouter } from 'connected-next-router'
import { SnackbarProvider } from 'notistack';
import store from '../src/store/store';
import Layout from '../src/assets/Layout'
import jwtDecode from 'jwt-decode';
import { setUser, setToken } from '../src/Others/App/actions';
//Router Notifier Section
import ErrorBoundary from '../src/Others/ErrorBoundary';
import Notifier from '../src/routers/components/Notifier';
import { enqueueSnackbar } from '../src/routers/actions';
import saga from '../src/routers/saga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from '../src/utils/injectSaga';
import { register } from 'next-offline/runtime'
import sitestyle from '../src/style/style.scss'
import '../src/style/image.css'
// Override variables

import "@pathofdev/react-tag-input/build/index.css";






class MyApp extends App {

  
    async componentDidMount () {
        register('/_next/service-worker.js', { scope: '/'});
        window.addEventListener('scroll', this.scrollUp)


        const tokenWithBearer = localStorage.getItem('token');
if (tokenWithBearer) {
  const token = tokenWithBearer.split(' ')[1];
  try {
    const decoded = jwtDecode(token);
    if (
      !(
        typeof decoded === 'object' &&
        typeof decoded.exp === 'number' &&
        decoded.exp > Date.now() / 1000
      )
    ) {
      localStorage.removeItem('token');
    } else {
      
      const user = {
        id: decoded.id,
        name: decoded.name,
        email: decoded.email,
        roles: decoded.roles,
        email_verified: decoded.email_verified,
        
      };
      store.dispatch(setToken(tokenWithBearer));
      store.dispatch(setUser(user));
    }
  } catch (error) {
    localStorage.removeItem('token');
  }
}

    }
	
   
    render(){
      const configureStore = store;
      

        const { Component, pageProps } = this.props
      
        return(
           
            <Provider store = {configureStore}>
            <ConnectedRouter>
            <style jsx>{sitestyle}</style>
            <SnackbarProvider maxSnack={3}>
            <ErrorBoundary>
            <Notifier />
           <Layout>
           
            <Component {...pageProps}></Component>
            </Layout>
           </ErrorBoundary>
            </SnackbarProvider>
            </ConnectedRouter>
           </Provider>
          
        )
      
    }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

const withSaga = injectSaga({ key: 'global', saga });

const mapStateToProps = createStructuredSelector({
    
});
const withConnect = connect(
  mapStateToProps,
  { enqueueSnackbar },
);



export default wrapper.withRedux(compose(
  withSaga,
  withConnect,
)(MyApp))