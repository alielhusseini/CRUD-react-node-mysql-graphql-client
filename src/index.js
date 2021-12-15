import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import { InMemoryCache, ApolloProvider, ApolloClient } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:5001/graphql', // reqs to this end point (the graphql server) / we didn' use thge HttpLink nor the setContext('@apollo/client/link/context')
  cache: new InMemoryCache()
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
