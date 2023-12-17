import styled from "styled-components";

export const HomePage = () => {
  return (
    <Container>
      <h1>Home Page</h1>
    </Container>
  );
};

const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.veryDarkBlueBg};
  color: ${({ theme }) => theme.colors.whiteTxt};
`;
