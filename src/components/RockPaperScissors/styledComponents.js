import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: 'Bree Serif';
  padding: 30px;
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  border: none;
  width: 100px;
  height: 40px;
  font-size: 18px;
  border-radius: 7px;
  align-self: flex-end;
  font-weight: 600;
  font-family: 'Bree Serif';
  cursor: pointer;
  outline: none;
  margin-right: 25px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  align-self: flex-end;
  border: none;
  cursor: pointer;
  outline: none;
  width: 28px;
  height: 28px;
  margin-top: 0;
  margin-right: 10px;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const RulesImage = styled.img`
  width: 90%;

  @media screen and (min-width: 768px) {
    width: 85%;
  }
`

export const GameViewContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SelectedChoiceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const SelectedItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-right: 30px;
  margin-left: 30px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
    margin-right: 50px;
    margin-left: 50px;
    margin-bottom: 0;
  }
`

export const SelectedImage = styled.img`
  width: 130px;
  height: 130px;

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`

export const Contestant = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  text-align: center;
`

export const Result = styled.p`
  color: #ffffff;
  font-size: 28px;
  font-family: 'Roboto';
  text-align: center;
  font-weight: 700;
`

export const PlayAgainButton = styled.button`
  height: 60px;
  width: 180px;
  border-radius: 15px;
  font-size: 18px;
  border: none;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 80px;
    width: 300px;
    border-radius: 15px;
    outline: none;
    font-size: 24px;
  }
`
