import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';
import Loading from './components/Loading';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <main className="bg-black">
            <Navbar />
            <Hero />
            <Highlights />
            <Model />
            <Features />
            <HowItWorks />
            <Footer />
          </main>
        )}
      </div>
    </>
  );
};

export default Sentry.withProfiler(App);
