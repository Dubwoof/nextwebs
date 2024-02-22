import { Typography } from '../../../../../elements/Typography/Typography';
import immoRechner from '../../../../../assets/immocalculator.png';
import { Link } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';

export function Products(): JSX.Element {
  return (
    <div className="text-start p-4">
      <Typography variant="h2" className="mb-4">
        Products
      </Typography>
      <div className="flex bg-slate-500 rounded-md">
        <Link to="/immorechner">
          <img className="h-[150px] w-[250px] rounded-md object-contain bg-white" src={immoRechner} alt="skindquad.de" width={150} height={150} />
        </Link>
        <div className="flex flex-col px-4">
          <Typography variant="h3">Immo Rechner</Typography>
          <Typography className="mb-4">Design & Entwicklung</Typography>

          <Link className="flex items-center" to="/immorechner">
            <BiChevronRight className="mr-1" />
            Visit
          </Link>
        </div>
      </div>
    </div>
  );
}
