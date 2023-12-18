import styled from "styled-components";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useState } from "react";

// interface Props {}

export const Header = () => {
  const [icon, setIcon] = useState(() => {
    return <IoMoonOutline />;
  });
  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDarkMode();
  }

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("selectedTheme");

    if (currentTheme === "dark") {
      setLightMode();
      setIcon(() => {
        return <IoMoonOutline />;
      });
    } else {
      setDarkMode();
      setIcon(() => {
        return <IoMoon />;
      });
    }
  };

  return (
    <Container className="styledHeader w-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 ">
      <HeaderText>Where in the world?</HeaderText>
      <Toggle>
        <ToggleButton className="flex items-center gap-2" onClick={toggleTheme}>
          {icon}
          DarkMode
        </ToggleButton>
      </Toggle>
    </Container>
  );
};

const Container = styled.div`
  height: 80px;
`;
const HeaderText = styled.div`
  font-weight: 800;
`;
const Toggle = styled.div``;
const ToggleButton = styled.button``;

// e:BaseSyntheticEvent
