import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

interface CountryItem {
  flags: {
    svg: string;
    alt: string;
  };
  name: {
    official: string;
    nativeName: {
      eng?: {
        common: string;
      }
    }
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  borders?: string[];
  border: string;
  cca3: string;
}

export const SingleCountry = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  const newName = name?.replace("}", "");

  const api = axios.create({
    baseURL: `https://restcountries.com/v3.1/name/${newName}`,
  });

  useEffect(() => {
    const getCountry = async () => {
      try {
        await api.get("/").then((res) => {
          setCountry(res.data);
          // console.log(country)
        });
      } catch (error) {
        console.error(error);
      }
    };
    getCountry();
  }, [api, country]);

  useEffect(() => {
    document.title = `${newName} Details`;
  }, [newName]);

  return (
    <>
      <Link to="/">
        <StyledBtn className="styledBtn px-8 py-2 mt-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 rounded shadow-md">
          &larr; Back
        </StyledBtn>
      </Link>
      <Section className="w-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 my-20">
        {country.map((item: CountryItem) => (
          <Wrap
            className="flex flex-col lg:flex-row gap-8 lg:justify-center lg:items-center"
            key={item.cca3}
          >
            <Article className=" imageContainer lg:basis-1/2 mb-12 lg:mb-0">
              <img
                className="w-full rounded-lg object-cover shadow"
                src={item.flags.svg}
                alt={item.flags.alt}
              />
            </Article>
            <Article className="lg:basis-1/2">
              <h1 className="font-bold text-2xl">{item.name.official}</h1>
              <ul className="my-4 flex flex-col items-start justify-start gap-2">
                <li>
                  Native name:{" "}
                  {item.name.nativeName?.eng?.common || item.name.official}
                </li>
                <li>Population: {item.population.toLocaleString()}</li>
                <li>Region: {item.region}</li>
                <li>Subregion: {item.subregion}</li>
                <li>Capital: {item.capital[0]}</li>
              </ul>
              <h3 className="font-bold text-lg mt-8 ">Border Countries:</h3>
              <ul className=" flex flex-wrap items-start justify-start gap-8 mt-4">
                {item.borders &&
                  item.borders.map((border, index: number) => (
                    <li
                      className="styledBorder flex flex-1 justify-center py-2 rounded shadow-md"
                      key={index}
                    >
                      {border}
                    </li>
                  ))}
              </ul>
            </Article>
          </Wrap>
        ))}
      </Section>
    </>
  );
};

const StyledBtn = styled.button``;
const Section = styled.div``;
const Wrap = styled.div``;
const Article = styled.article`
  .imageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
