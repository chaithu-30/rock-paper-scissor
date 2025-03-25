import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import {Component} from 'react'

import Header from '../Header'

import ChoiceItem from '../ChoiceItem'

import './index.css'

import {
  AppContainer,
  RulesButton,
  ModalContainer,
  CloseButton,
  RulesImage,
  GameViewContainer,
  ResultContainer,
  SelectedChoiceContainer,
  SelectedImage,
  SelectedItemContainer,
  Contestant,
  Result,
  PlayAgainButton,
} from './styledComponents'

const rulesImage =
  'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png'

class RockPaperScissors extends Component {
  state = {
    score: 0,
    showChoices: true,
    showResult: false,
    userChoice: '',
    botChoice: '',
    result: '',
  }

  incrementScore = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  decrementScore = () => {
    this.setState(prevState => ({score: prevState.score - 1}))
  }

  onClickChoice = id => {
    const {choicesList} = this.props

    const randomNumber = Math.floor(Math.random() * choicesList.length)
    const opponentChoice = choicesList[randomNumber].id

    let spellResult = ''
    if (id === 'PAPER' && opponentChoice === 'ROCK') {
      spellResult = 'YOU WON'
      this.incrementScore()
    } else if (id === 'SCISSORS' && opponentChoice === 'ROCK') {
      spellResult = 'YOU LOSE'
      this.decrementScore()
    } else if (id === 'ROCK' && opponentChoice === 'PAPER') {
      spellResult = 'YOU LOSE'
      this.decrementScore()
    } else if (id === 'SCISSORS' && opponentChoice === 'PAPER') {
      spellResult = 'YOU WON'
      this.incrementScore()
    } else if (id === 'ROCK' && opponentChoice === 'SCISSORS') {
      spellResult = 'YOU WON'
      this.incrementScore()
    } else if (id === 'PAPER' && opponentChoice === 'SCISSORS') {
      spellResult = 'YOU LOSE'
      this.decrementScore()
    } else {
      spellResult = 'IT IS DRAW'
    }

    this.setState(prevState => ({
      showChoices: !prevState.showChoices,
      showResult: !prevState.showResult,
      userChoice: id,
      botChoice: opponentChoice,
      result: spellResult,
    }))
  }

  onClickPlayAgain = () => {
    this.setState(prevState => ({
      showChoices: !prevState.showChoices,
      userChoice: '',
      botChoice: '',
      showResult: !prevState.showResult,
    }))
  }

  renderPlayingView = () => {
    const {showChoices} = this.state
    const {choicesList} = this.props

    if (showChoices) {
      return (
        <GameViewContainer>
          {choicesList.map(eachChoice => (
            <ChoiceItem
              key={eachChoice.id}
              onClickChoice={this.onClickChoice}
              choiceDetails={eachChoice}
            />
          ))}
        </GameViewContainer>
      )
    }
    return null
  }

  renderResultView = () => {
    const {userChoice, botChoice, result, showResult} = this.state

    const {choicesList} = this.props

    const userSelectedChoice = choicesList.filter(
      eachChoice => eachChoice.id === userChoice,
    )

    const opponentSelectedChoice = choicesList.filter(
      eachChoice => eachChoice.id === botChoice,
    )

    if (showResult) {
      return (
        <ResultContainer>
          <SelectedChoiceContainer>
            <SelectedItemContainer>
              <Contestant>YOU</Contestant>
              <SelectedImage
                src={userSelectedChoice[0].imageUrl}
                alt="your choice"
              />
            </SelectedItemContainer>
            <SelectedItemContainer>
              <Contestant>OPPONENT</Contestant>
              <SelectedImage
                src={opponentSelectedChoice[0].imageUrl}
                alt="opponent choice"
              />
            </SelectedItemContainer>
          </SelectedChoiceContainer>
          <Result>{result}</Result>
          <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </ResultContainer>
      )
    }
    return null
  }

  render() {
    const {score} = this.state

    return (
      <>
        <AppContainer>
          <Header score={score} />
          {this.renderPlayingView()}
          {this.renderResultView()}
          <Popup
            modal
            trigger={<RulesButton> RULES </RulesButton>}
            className="popup-display"
          >
            {close => (
              <ModalContainer>
                <CloseButton type="button" onClick={() => close()}>
                  <IoMdClose size={20} color="#231f20" />
                </CloseButton>
                <RulesImage src={rulesImage} alt="rules" />
              </ModalContainer>
            )}
          </Popup>
        </AppContainer>
      </>
    )
  }
}

export default RockPaperScissors
