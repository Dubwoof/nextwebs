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

const routes: NavigationRoute[] = [
  { label: 'Contact', path: '/contact', isPrimary: true },
  { label: 'Components', path: '/blog' },
  { label: 'Tools', path: '/tools' },
  { label: 'Login', path: '/login' },
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
