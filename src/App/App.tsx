import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsConfig from '../aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';

Amplify.configure(awsConfig);

const AppContent = () => {
  const location = useLocation<{ noscroll?: boolean } | null>();

  // hash
  React.useLayoutEffect(() => {
    const hash = location.hash;
    setTimeout(() => {
      const scrollToEl = document.getElementById(hash.replace('#', ''));
      if (scrollToEl) {
        window.scrollTo({
          top: scrollToEl.getBoundingClientRect().top - 80 + window.scrollY,
          left: 0,
          behavior: 'smooth',
        });
      }
    }, 50);
  }, [location.hash]);

  // location

  React.useLayoutEffect(() => {
    if (location.state?.noscroll) {
      return;
    }
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [location.pathname, location.state]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          bum
        </p>
      </header>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <AppContent />
      </Router>
    </>
  );
};

export default withAuthenticator(App);
