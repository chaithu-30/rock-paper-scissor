import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: transparent;
  width: 95%;
  height: 150px;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ffffff;
  border-radius: 12px;
  color: #ffffff;
  padding: 20px;

  @media screen and (min-width: 768px) {
    max-width: 1110px;
  }
`

export const GameChoicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`

export const GameChoices = styled.h1`
  color: #ffffff;
  font-size: 24px;
  margin: 0px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-height: 768px) {
    max-width: 200px;
  }
`

export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 22px;
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: 600;
`

export const Score = styled.p`
  color: #223a5f;
  font-size: 38px;
  font-weight: 600;
  margin: 0px;
  font-family: 'Roboto';
`
