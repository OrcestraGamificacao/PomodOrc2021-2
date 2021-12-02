import styled from 'styled-components';

export const MainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 3;
  text-align: center;
  font-family: 'Tr2n';
  src: url('fonts/Tr2n.ttf');
  font-size: 100px;
  color: #FE76FE;
  text-shadow:
  0 0 7px #FE76FE,
  0 0 151px #FE76FE;

`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.sizes.phone}px;
  padding: 2rem;
  width: 100%;
  text-align: center;

`;