import { Section } from '../../components/Section/Section';
import { Typography } from '../../elements/Typography/Typography';
import { NavWidth } from '../../layouts/NavWidth';
import { PageProps } from '../Page.types';

export function Imprint({}: PageProps): JSX.Element {
  return (
    <Section>
      <NavWidth>
        <div className="flex flex-col p-4">
          <Typography variant="h1" className="mb-2">
            Impressum
          </Typography>
          <Typography variant="h3" className="mb-1">
            Angaben gemäß § 5 TMG
          </Typography>
          <Typography variant="body1" className="mb-8">
            Artur Sattelmaier
            <br />
            Landsbergerstraße 141
            <br />
            80339 München
          </Typography>
          <Typography variant="h3">Kontakt</Typography>
          <Typography className="mb-8">
            Telefon: 089 12345678
            <br />
            E-Mail: kontakt&#64;&#110;extwebs&#46;de
          </Typography>
          <Typography variant="h3">EU-Streitschlichtung</Typography>
          <Typography className="mb-8">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/.
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </Typography>
          <Typography variant="h3">Verbraucherstreitbeilegung / Universalschlichtungsstelle</Typography>
          <Typography className="mb-8">
            Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.<br />
            Quelle: eRecht24
          </Typography>
        </div>
      </NavWidth>
    </Section>
  );
}
