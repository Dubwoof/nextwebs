import { JSX } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './elements/Navigation/Navigation';
import { NotFound } from './pages/NotFound/NotFound';
import { Home } from './pages/Home/Home';
import { Logo } from './components/Logo/Logo';
import { NavigationRoute } from './elements/Navigation/Navigation.types';

export default function WrappedApp(): JSX.Element {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

const routes: NavigationRoute[] = [];

function App() {
  return (
    <>
      <Navigation logo={<Logo />} routes={routes} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
