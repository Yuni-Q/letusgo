import { Container } from 'next/app';
import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import withReduxSaga from 'next-redux-saga';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import Helmet from 'react-helmet';

import reducer from '../reducers';
import rootSaga from '../sagas';
import Footer from '../components/Footer';
// import firebase from '../common/firebase';

const StyledMyApp = styled.div``;
// console.log(firebase);

const MyApp = ({ Component, store, pageProps }) => (
  <Container>
    <Provider store={store}>
      <Helmet
        title="letusgo"
        htmlAttributes={{ lang: 'ko' }}
        meta={[
          {
            charset: 'UTF-8',
          },
          {
            name: 'viewport',
            content:
              'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
          },
          {
            'http-equiv': 'X-UA-Compatible',
            content: 'IE=edge',
          },
          {
            name: 'description',
            content: 'letusgo',
          },
          {
            property: 'og:type',
            content: 'website',
          },
        ]}
        link={[
          {
            rel: 'shortcut icon',
            href:
              'https://letusgo-front.s3.ap-northeast-2.amazonaws.com/favicon.ico',
          },
          {
            rel: 'stylesheet',
            href:
              'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css',
          },
          {
            rel: 'stylesheet',
            href: '/static/reset.css',
          },
          {
            rel: 'stylesheet',
            href:
              'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css',
          },
        ]}
      />
      <StyledMyApp>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Component {...pageProps} />
        </div>
        <Footer />
      </StyledMyApp>
    </Provider>
  </Container>
);

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
    store => next => action => {
      if (process.env.NODE_ENV !== 'production') {
        console.log(store, action);
      }

      next(action);
    },
  ];
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(
          applyMiddleware(...middlewares),
          !options.isServer &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f,
        )
      : compose(applyMiddleware(...middlewares));
  const store = createStore(reducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

MyApp.getInitialProps = async context => {
  const isServer = !!context.ctx.req;
  if (isServer) {
    //
  } else {
    //
  }
  let pageProps = {};
  if (context.Component.getInitialProps) {
    pageProps = await context.Component.getInitialProps(context.ctx);
  }
  return { pageProps, isServer };
};

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  store: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
};

export default withRedux(configureStore)(withReduxSaga(MyApp));
