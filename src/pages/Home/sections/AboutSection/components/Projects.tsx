import { Typography } from '../../../../../elements/Typography/Typography';
import skinsquad from '../../../../../assets/skinsquad.png';
import { Link } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';

export function Projects(): JSX.Element {
  return (
    <div className="text-start p-4">
      <Typography variant="h2" className="mb-4">
        Projects
      </Typography>
      <div className="flex bg-slate-500 rounded-md">
        <Link target="_blank" to="https://www.skinsquad.de">
          <img className="h-[150px] w-[250px] rounded-md object-contain bg-white" src={skinsquad} alt="skindquad.de" width={150} height={150} />
        </Link>
        <div className="flex flex-col ml-4">
          <Typography variant="h3">skinsquad.de</Typography>
          <Typography className="mb-4">Design & Entwicklung</Typography>

          <Link className="flex items-center" target="_blank" to="https://www.skinsquad.de">
            <BiChevronRight className="mr-1" />
            Visit
          </Link>
        </div>
      </div>
    </div>
  );
}
