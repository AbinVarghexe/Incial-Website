import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';
import Loading from './components/Loading';

const App = () => {
  return (
    <main className="bg-black ">
      {/* <Navbar />
      <Hero />
      <Highlights /> */}
      {/* <Model /> */}
      {/* <Features />
      <HowItWorks /> */}
      <Loading />
      {/* <Footer /> */}
    </main>
  )
}

export default Sentry.withProfiler(App);
