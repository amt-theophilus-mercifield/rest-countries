import styled from "styled-components";
import { IoMoon, IoMoonOutline } from "react-icons/io5";

interface Props {}

export const Header = (props: Props) => {
  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("dark=theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("dark=theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") setDarkMode();

  const toggleTheme = (e:Event) => {
    if (e.target.checked) setDarkMode();
    else setLightMode()
  }

  return (
    <Container className="styledHeader flex">
      <HeaderText>Where in the world?</HeaderText>
      <ToggleButton className="flex" onClick={toggleTheme} >
        <IoMoon />
        <IoMoonOutline />
        DarkMode
      </ToggleButton>
    </Container>
  );
};

const Container = styled.div`
  height: 80px;
`;
const HeaderText = styled.div``;
const ToggleButton = styled.div``;
