import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Article } from "./Article";

interface Country {
  name: {
    common: string;
  },
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  subregion: string;
}

const api = axios.create({
  baseURL: `https://restcountries.com/v3.1/all`,
});

const filterApi = axios.create({
  baseURL: `https://restcountries.com/v3.1/region/`,
});

export const Countries = () => {
  const [countries, setCountries] = useState<[]>([]);
  const [searchText, setSearchText] = useState("");
  const [filterRegion, setFilterRegion] = useState("");

  const regions = [
    { name: "Filter by region" },
    { name: "Africa" },
    { name: "Asia" },
    { name: "Europe" },
    { name: "Americas" },
    { name: "Oceania" },
  ];

  const searchApi = axios.create({
    baseURL: `https://restcountries.com/v3.1/name/${searchText}`,
  });

  useEffect(() => {
    document.title = "Uniik's Countries App";
  }, []);

  useEffect(() => {
    const getCountries = async () => {
      try {
        await api.get("/").then((res) => {
          setCountries(res.data);
        });
      } catch (error) {
        console.error(error);
      }
    };
    getCountries();
  }, []);

  const searchCountry = async () => {
    try {
      await searchApi.get("/").then((res) => {
        setCountries(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const filterCountry = async (region: string) => {
    try {
      if (region === "Filter by region") return;
      await filterApi.get(`/${region}`).then((res) => {
        setCountries(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(searchText);
    searchCountry();
    setSearchText("");
  };

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    // filterCountry(region);
  };

  return (
    <Main className="w-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16">
      {countries.length === 0 ? (
        <h1 className="font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-4xl">
          loading...
        </h1>
      ) : (
        <Container className="w-full  ">
          <Section className="flex flex-col lg:flex-row lg:justify-between gap-10 my-6 lg:mt-12 ">
            <StyledForm
              className="styledForm flex max-w-[480px] h-[56px] lg:basis-3/4 shadow rounded overflow-hidden"
              autoComplete="off"
              onSubmit={handleSearch}
            >
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for a country.."
                required
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="styledInput outline-none  w-full px-[20px]"
              />
            </StyledForm>
            <StyledForm className="styledForm flex pr-[20px] max-w-[200px] h-[56px] lg:basis-1/4 rounded shadow overflow-hidden">
              <select
                name="filter-by-region"
                id="filter-by-region"
                className="outline-none w-full pl-[20px]"
                value={filterRegion}
                onChange={(e) => {
                  filterCountry(e.target.value);
                  setFilterRegion(e.target.value);
                }}
                onSubmit={handleFilter}
              >
                {regions.map((region, index) => (
                  <option key={index} value={region.name}>
                    {region.name}
                  </option>
                ))}
              </select>
            </StyledForm>
          </Section>
          <Section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
            {countries.map((country: Country) => (
              <Article
                key={country.name.common}
                flags={country.flags}
                name={country.name.common}
                population={country.population}
                region={country.region}
                subregion={country.subregion}
              />
            ))}
          </Section>
        </Container>
      )}
    </Main>
  );
};

const Main = styled.main``;
const Container = styled.div``;
const Section = styled.section``;
const StyledForm = styled.form``;
