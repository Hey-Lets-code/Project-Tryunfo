import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true };
    this.baseState = this.state;
  }

  resetForm = () => {
    this.setState(this.baseState);
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      this.onSaveButtonClick();
    });
  };

  onSaveButtonClick = (() => {
    const MAX_SUM = 210;
    const MAX_LENGTH = 90;
    const ZERO = 0;

    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage } = this.state;

    const validateForString = cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardAttr1.length > 0
      && cardAttr2.length > 0
      && cardAttr3.length > 0;

    const sumOfAttributes = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    // const sumOfAttributes = +cardAttrb1 + +cardAttrb2 + +cardAttrb3;

    const validateSum = sumOfAttributes <= MAX_SUM;

    const verifyInputCardAttrOneLessMax = Number(cardAttr1) <= MAX_LENGTH;

    const verifyInputCardAttrOneLessMin = Number(cardAttr1) >= ZERO;

    const verifyInputCardAttrTwoLessMax = Number(cardAttr2) <= MAX_LENGTH;

    const verifyInputCardAttrTwoLessMin = Number(cardAttr2) >= ZERO;

    const verifyInputCardAttrThreeLessMax = Number(cardAttr3) <= MAX_LENGTH;

    const verifyInputCardAttrThreeLessMin = Number(cardAttr3) >= ZERO;

    const verifyAllCardAtrributes = verifyInputCardAttrOneLessMax
    && verifyInputCardAttrTwoLessMax
    && verifyInputCardAttrThreeLessMax
    && verifyInputCardAttrOneLessMin
    && verifyInputCardAttrTwoLessMin
    && verifyInputCardAttrThreeLessMin;

    const finalVerify = validateForString && validateSum && verifyAllCardAtrributes;

    this.setState({
      isSaveButtonDisabled: !finalVerify,
    });
  });

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled } = this.state; // o valor do state foi desestruturado
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName } // prop do Form com o valor do state do App
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.resetForm }
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
// Arthur Debiasi me ajudou a construir dinamicamente a lógica do onInputChange
export default App;
