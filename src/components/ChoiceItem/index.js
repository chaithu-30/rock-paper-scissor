import {ChoiceContainer, ChoiceButton, ChoiceImage} from './styledComponents'

const ChoiceItem = props => {
  const {choiceDetails, onClickChoice} = props
  const {id, imageUrl} = choiceDetails

  const onClickChoiceImage = () => {
    onClickChoice(id)
  }

  let buttonTestId = ''

  switch (id) {
    case 'ROCK':
      buttonTestId = 'rockButton'
      break
    case 'PAPER':
      buttonTestId = 'paperButton'
      break
    default:
      buttonTestId = 'scissorsButton'
  }

  return (
    <ChoiceContainer>
      <ChoiceButton
        type="button"
        onClick={onClickChoiceImage}
        data-testid={buttonTestId}
      >
        <ChoiceImage src={imageUrl} alt={id} />
      </ChoiceButton>
    </ChoiceContainer>
  )
}

export default ChoiceItem
