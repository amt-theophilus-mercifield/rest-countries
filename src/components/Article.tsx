import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  flags: object;
  name: {
    common: string;
  };
  population: number;
  region: string;
  subregion: string;
}

export const Article = ({
  flags,
  name,
  population,
  region,
  subregion,
}: Props) => {
  return (
    <Link to={`/${name.common}}`}>
      <Card className="styledCard my-11 md:my-13 lg:my-15 rounded-lg shadow overflow-hidden">
        <img
          src={flags.svg}
          alt={name.common}
          className="object-cover w-full overflow-hidden"
        />
        <div className="p-4">
          <h2 className="font-bold text-lg mb-2">{name.common}</h2>
          <ul className="flex flex-col items-start justify-center gap-2">
            <li>Population: {population.toLocaleString()}</li>
            <li>Region: {region}</li>
            <li>Subregion: {subregion}</li>
          </ul>
        </div>
      </Card>
    </Link>
  );
};

const Card = styled.article`
  height: 336px;
  width: 264px;
  img {
    height: 160px;
    width: 264px;
  }
`;
