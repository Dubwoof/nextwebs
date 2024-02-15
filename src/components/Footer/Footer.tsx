import { Link } from 'react-router-dom';
import { Typography } from '../../elements/Typography/Typography';

export function Footer(): JSX.Element {
  return (
    <footer className="flex flex-col items-center justify-center w-full border-t border-slate-700 border-1 pt-1 mt-4">
      <Typography variant="caption">© 2021 - All rights reserved</Typography>
      <Link to="/imprint">
        <Typography variant="caption">Imprint</Typography>
      </Link>
      <Link to="/privacy">
        <Typography variant="caption">Privacy Policy</Typography>
      </Link>
    </footer>
  );
}
