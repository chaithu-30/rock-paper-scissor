import {
  HeaderContainer,
  GameChoicesContainer,
  GameChoices,
  ScoreContainer,
  ScoreHeading,
  Score,
} from './styledComponents'

const Header = props => {
  const {score} = props

  return (
    <HeaderContainer>
      <GameChoicesContainer>
        <GameChoices>
          ROCK <br />
          PAPER <br />
          SCISSORS
        </GameChoices>
        <ScoreContainer>
          <ScoreHeading>Score</ScoreHeading>
          <Score>{score}</Score>
        </ScoreContainer>
      </GameChoicesContainer>
    </HeaderContainer>
  )
}

export default Header
