import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      newCard: [],
      hasTrunfo: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.enableButton());
  }

  enableButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
    } = this.state;

    const validateString = cardName.length > 0
    && cardDescription.length > 0 && cardImage.length > 0 && cardRare.length > 0;

    const sumMaxAttrs = 210;
    const sumAttrs = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const validateSum = sumAttrs <= sumMaxAttrs;

    const pointsAttrs = 90;
    const maxPointsAttr1 = cardAttr1 >= 0 && cardAttr1 <= pointsAttrs;
    const maxPointsAttr2 = cardAttr2 >= 0 && cardAttr2 <= pointsAttrs;
    const maxPointsAttr3 = cardAttr3 >= 0 && cardAttr3 <= pointsAttrs;

    const verifyInputs = maxPointsAttr1 && maxPointsAttr2 && maxPointsAttr3;
    const finalCheck = validateString && validateSum && verifyInputs;
    this.setState({
      isSaveButtonDisabled: !finalCheck,
    });
    // }
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const saveCard = { ...this.state };
    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      newCard: [...prevState.newCard, saveCard],
    }), () => {
      const { newCard } = this.state;
      const isTrue = newCard.some((item) => item.cardTrunfo);
      this.setState({
        hasTrunfo: isTrue,
      });
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
