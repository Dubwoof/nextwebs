import { Link } from 'react-router-dom';
import { Typography } from '../../elements/Typography/Typography';

export function Footer(): JSX.Element {
  return (
    <footer className="flex flex-col items-center justify-center w-full border-t border-slate-700 border-1 py-2 md:py-4">
      <Typography variant="caption">© 2021 - All rights reserved</Typography>
      <div className="flex gap-4">
        <Link to="/imprint">
          <Typography variant="caption">Impressum</Typography>
        </Link>
        <Link to="/privacy">
          <Typography variant="caption">Datenschutz</Typography>
        </Link>
        <Link to="/booking">
          <Typography variant="caption">Booking</Typography>
        </Link>
      </div>
    </footer>
  );
}
