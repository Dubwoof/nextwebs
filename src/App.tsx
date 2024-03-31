import { JSX } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { NotFound } from './pages/NotFound/NotFound';
import { Home } from './pages/Home/Home';
import { Logo } from './components/Logo/Logo';
import { NavigationRoute } from './components/Navigation/Navigation.types';
import { Footer } from './components/Footer/Footer';
import { Imprint } from './pages/Imprint/Imprint';
import { Booking } from './pages/Booking/Booking';

export default function WrappedApp(): JSX.Element {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function changeTab(tabNumber: number) {
  const changeTabEvent = new CustomEvent<number>('changeTab', {
    detail: tabNumber,
  });
  window.dispatchEvent(changeTabEvent);
}

function mailto() {
  const email = 'm&#97;ilto&#58;&#107;o&#37;6E&#37;7&#52;akt&#64;nextwebs&#46;de';
  const subject = 'Nextwebs';
  const body = 'Hello Nextwebs team,\n\n';
  const mailtoLink = `mailto:${decodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}

const routes: NavigationRoute[] = [
  { label: 'About', path: '/about', onClick: () => changeTab(0) },
  { label: 'UI Library', path: '/components', onClick: () => changeTab(1) },
  { label: 'Products', path: '/tools', onClick: () => changeTab(2) },
  { label: 'Contact', path: '/contact', isPrimary: true, onClick: () => mailto() },
];

const routesWithNavigation: string[] = ['/', '/*'];

function App() {
  const location = useLocation();
  const shouldDisplayNavigation = routesWithNavigation.some(route => route === location.pathname);

  return (
    <div className="flex flex-col lg:justify-center w-screen">
      {shouldDisplayNavigation && <Navigation logo={<Logo />} routes={routes} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
