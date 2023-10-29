import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { Auth0Provider } from '@auth0/auth0-react';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import UserProvider from './context/UserProvider.jsx'

if (process.env.NODE_ENV !== "production") {  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <ApolloProvider client={client}>

        <Auth0Provider domain={import.meta.env.VITE_APP_AUTH0_DOMAIN}
          clientId={import.meta.env.VITE_APP_AUTH0_CLIENT} authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
          <UserProvider>
            <Toaster position="top-center"
              reverseOrder={false}
              toastOptions={{ duration: 5000 }} />
            <App />
          </UserProvider>
        </Auth0Provider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
