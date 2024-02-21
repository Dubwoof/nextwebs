import { JSX } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { NotFound } from './pages/NotFound/NotFound';
import { Home } from './pages/Home/Home';
import { Logo } from './components/Logo/Logo';
import { NavigationRoute } from './components/Navigation/Navigation.types';
import { Footer } from './components/Footer/Footer';

export default function WrappedApp(): JSX.Element {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function changeTabToIndexTwo(tabNumber: number) {
  const changeTabEvent = new CustomEvent<number>('changeTab', {
    detail: tabNumber,
  });
  window.dispatchEvent(changeTabEvent);
}

const routes: NavigationRoute[] = [
  { label: 'Components', path: '/components', onClick: () => changeTabToIndexTwo(2) },
  { label: 'About', path: '/about', onClick: () => changeTabToIndexTwo(0) },
  { label: 'Tools', path: '/tools', onClick: () => changeTabToIndexTwo(3) },
  { label: 'Login', path: '/login' },
  { label: 'Contact', path: '/contact', isPrimary: true },
];

function App() {
  return (
    <div className="flex flex-col lg:justify-center w-screen">
      <Navigation logo={<Logo />} routes={routes} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
