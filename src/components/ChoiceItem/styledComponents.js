import styled from 'styled-components'

export const ChoiceContainer = styled.li`
  margin: auto;
  margin-top: 40px;
`

export const ChoiceButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`

export const ChoiceImage = styled.img`
  width: 130px;
  height: 130px;

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`
