import styled from 'styled-components';

export const MainTitle = styled.h1`
  #Orc {
    font-family: 'Tr2n';
    color: #FF00A1;
  }

  #Orc:hover {
    text-shadow:
    0 0 7px #FF00A1,
    0 0 151px #FF00A1
  }

  #Pomod {
    font-family: 'Tr2n';
    color: #FE76FE;
    text-shadow:
    0 0 7px #FE76FE,
    0 0 151px #FE76FE;
  }

  color: ${({ theme }) => theme.colors.white};
  margin-top: 3;
  text-align: center;
  src: url('fonts/Tr2n.ttf');

  @media only screen and (max-width: 600px) {
    font-size: 10vw;
  }
  @media only screen and (min-width: 600px) {
    font-size: 70px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.sizes.phone}px;
  padding: 2rem;
  width: 100%;
  text-align: center;
  justify-content: center;
`;

  export const GoBack = styled.h1`
  src: url('fonts/Tr2n.ttf');
  width: 300px;
  width: 50%;
  margin: 0 auto;

  
  text-align: center;
  padding-top:4em;
  padding-bottom:4em;

  .init {
    background: linear-gradient(
    #FE76FE 0%,
    #FF1250 100%
    );

    height: 50vw;

    text-align: center;
    font-family: 'Tr2n';
    text-decoration: none;
    color: #120459;
    font-size: 36px;
    transition-duration: 0.25s;

    border-top-left-radius: 250px;
    border-bottom-left-radius: 250px;
    border-top-right-radius: 250px;
    border-bottom-right-radius: 250px;
  
  
    height: 20px;
    align-items: center;
    justify-content: center;
    padding-top: 0.25em;
  }

  .init text {
    font-family: 'Tr2n';
    padding: 1em;
    transition: .25s;
  }

  .init:hover text {
    color:#FE76FE;
    text-shadow:
      0 0 7px #ff30ff,
      0 0 10px #FE76FE,
      0 0 21px #FE76FE,
      0 0 42px #FE76FE,
      0 0 82px #FE76FE,
      0 0 92px #FE76FE,
      0 0 102px #FE76FE;
    font-family: 'Tr2n';
    padding: 1em;
  }

  .init:hover{
    color:#926292;
    background: linear-gradient(
      #FE76FE -30%,
      #FF1250 70%
      );
  }
`;