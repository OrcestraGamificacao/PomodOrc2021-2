import styled from 'styled-components';

export const MainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 0;
  text-align: center;
  font-family: 'Tr2n';
  src: url('fonts/Tr2n.ttf');
  font-size: 100px;
  color: #FE76FE;
  text-shadow:
  0 0 7px #FE76FE,
  0 0 151px #FE76FE;
`;
export const Orc = styled.h1`
color: ${({ theme }) => theme.colors.white};
margin-top: 0;
text-align: center;
font-family: 'Tr2n';
src: url('fonts/Tr2n.ttf');
font-size: 100px;
color: #FF00A1;
text-shadow:
0 0 7px #FF00A1,
0 0 151px #FF00A1;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.sizes.phone}px;
  padding: 2rem;
  width: 100%;
`;