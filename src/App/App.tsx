import React from 'react';
import logo from './logo.png';
import './App.scss';
import { NavBar } from 'src/components/layout/NavBar';
import { FooterSection } from 'src/sections/Footer.section';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';

import { PageLoader } from 'src/components/layout/Page';
import CookieConsent from 'src/components/CookieConsent';

const HomePage = React.lazy(() => import('../pages/Home/Home.page'));
const AboutPage = React.lazy(() => import('../pages/About/About.page'));
const SubmitHoursPage = React.lazy(() => import('../pages/SubmitHours/SubmitHours.page'));
const EventsPage = React.lazy(() => import('../pages/Events/Events.page'));
const TutoringPage = React.lazy(() => import('../pages/Tutoring/Tutoring.page'));
const CommitteesPage = React.lazy(() => import('../pages/Committees/Committees.page'));
const AnnouncementsPage = React.lazy(() => import('../pages/Announcements/Announcements.page'));
const DocumentsPage = React.lazy(() => import('../pages/Documents/Documents.page'));
const PhotoGalleryPage = React.lazy(() => import('src/pages/PhotoGallery/PhotoGallery.page'));

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
    <>
      {/* <React.Suspense fallback={<React.Fragment />}>
        
      </React.Suspense> */}
      <React.Suspense fallback={<PageLoader />}>
      <NavBar />
        <Switch>
          <Route exact component={HomePage} path="/" />
          <Route exact component={AboutPage} path="/about" />
          <Route exact component={SubmitHoursPage} path="/submit-hours" />
          <Route exact component={EventsPage} path="/events" />
          <Route exact component={TutoringPage} path="/tutoring" />
          <Route exact component={CommitteesPage} path="/committees" />
          <Route exact component={AnnouncementsPage} path="/announcements" />
          <Route exact component={DocumentsPage} path="/documents" />
          <Route exact component={PhotoGalleryPage} path="/photo-gallery" />
          {/* <Route path="/not-found" component={NotFoundPage} /> */}
          <Redirect to="/" />
        </Switch>
        {/* <CookieConsent></CookieConsent> */}
      </React.Suspense>
      <React.Suspense fallback={<React.Fragment />}>
        <FooterSection />
      </React.Suspense>
    </>
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

export default App;
