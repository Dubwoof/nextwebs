import { Typography } from '../../../../../elements/Typography/Typography';
import { calculateYearsFromDate } from '../../../../../utils/calculateYearsFromDate';
import metaLogo from '../../../../../assets/meta.png';
import { stack } from './stack';
import { CardBody, CardContainer, CardItem } from '../../../../../components/TreeDCard/TreeDCard';

const styles = {
  stackItem: 'flex flex-col items-center justify-center p-2 gap-1 bg-slate-600 rounded-xl hover:bg-slate-700 w-24 h-24 select-none',
  grid: 'grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 mb-8',
};

export function Overview(): JSX.Element {
  return (
    <div className="text-start p-4">
      <Typography variant="h2" transform="uppercase">
        About Me
      </Typography>
      <Typography variant="h3" className="mb-8">
        Hi, I'm Artur, a Software Engineer.
      </Typography>
      <Typography className="mb-8">
        I'm a software engineer with a passion for web development. With 4+ years of experience in the field, I have worked on a variety of
        projects, from small business websites to large-scale web applications. I'm always looking for new challenges and opportunities to
        grow and improve my skills.
      </Typography>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8">
        <div className="flex bg-slate-600 hover:bg-slate-700 px-4 py-2 rounded-xl gap-3 items-center justify-start md:w-1/3 select-none h-14 md:h-20">
          <Typography variant="overline" className="w-min">
            {calculateYearsFromDate('2019-07-01')}+
          </Typography>
          <div className="">years of experience</div>
        </div>

        <div className="flex bg-slate-600 hover:bg-slate-700 px-4 py-2 rounded-xl gap-3 items-center md:w-1/3 select-none h-14 md:h-20">
          <img className="object-cover aspect-square" src={metaLogo} alt="Meta" width={32} height={32} />
          <div className="">Advanced React Certificate</div>
        </div>
      </div>

      <Typography variant="h3">My Stack</Typography>
      <Typography variant="subtitle1" className="mb-4">
        Application & Data
      </Typography>
      <div className={styles.grid}>
        {stack.map((item, index) => {
          if (item.category === 'applicationAndData') {
            return (
              <CardContainer className="inter-var">
                <CardBody className="relative group/card w-min h-min">
                  <CardItem translateZ="50">
                    <div key={index} className={styles.stackItem}>
                      <img className="rounded-md" src={item.logo} alt={item.name} width={60} height={60} />
                      <Typography variant="caption">{item.name}</Typography>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          }
          return null;
        })}
      </div>

      <Typography variant="subtitle1" className="mb-4">
        In Progress
      </Typography>
      <div className={styles.grid}>
        {stack.map((item, index) => {
          if (item.category === 'inProgress') {
            return (
              <CardContainer className="inter-var">
                <CardBody className="relative group/card w-min h-min">
                  <CardItem translateZ="50">
                    <div key={index} className={styles.stackItem}>
                      <img className="rounded-md" src={item.logo} alt={item.name} width={60} height={60} />
                      <Typography variant="caption">{item.name}</Typography>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          }
        })}
      </div>
    </div>
  );
}
