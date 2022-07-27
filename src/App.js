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
      // cardSave: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.enableButton());
  }

  // o botão deve iniciar desabilitado e só habilitar após todos os campos serem preenchidos
  // os campos nome, descrição, imagem e raridade deve ter alguma informação
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
    // this.setState({
    //   isSaveButtonDisabled: !validateString,
    // });
    // a soma de attr1, attr2 e attr3 não podem ultrapassar o valor 210
    const sumMaxAttrs = 210;
    const sumAttrs = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const validateSum = sumAttrs <= sumMaxAttrs;
    // if (validateString && validateSum) {
    //   this.setState({
    //     isSaveButtonDisabled: !validateSum,
    //   });
    //  cada um dos attrs devem ter no minimo 0
    //  maximo 90 pontos cada
    // os attrs não podem receber valor negativo
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
    console.log('ok');
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
      // hasTrunfo,
      isSaveButtonDisabled,
      // onInputChange,
      // onSaveButtonClick,
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
          // hasTrunfo,
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
