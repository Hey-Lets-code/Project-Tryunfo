import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      data: [],
      // kawaii: [],
    };
    // this.baseState = this.state;
  }

  // resetForm = () => {
  // const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
  // cardImage, cardRare, cardTrunfo, data } = this.state;
  // const objetao = { cardName,
  // cardDescription,
  // cardAttr1,
  // cardAttr2,
  // cardAttr3,
  // cardImage,
  // cardRare,
  // cardTrunfo };
  // const getLocalStorage = localStorage.getItem('Cards');
  // console.log(getLocalStorage);
  // localStorage.setItem('Cards', [...getLocalStorage, objetao]);
  // this.state(this.baseState);
  // };
  componentDidMount() {
    const cards = JSON.parse(localStorage.getItem('Cards'));
    if (cards) {
      this.setState({ data: cards });
    }
  }

  componentDidUpdate() {
    this.settingLocalStorage();
  }

  settingLocalStorage = () => {
    const { data } = this.state;
    // if (data.length !== 0) {
    localStorage.setItem('Cards', JSON.stringify(data));
    // JSON.parse(localStorage.getItem('Cards'));
    // }
    // console.log(data);
  };

  resetForm = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo } = this.state;
    const objetao = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };
    this.setState((estado) => ({
      data: [...estado.data, objetao], // estado.data é o valor anterior
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: hasTrunfo ? true : cardTrunfo,
    }));
  };

  // verifyTrunfo = (() => {
  // const { hasTrunfo } = this.state;
  // const
  // });

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
      cardTrunfo, isSaveButtonDisabled, hasTrunfo, data } = this.state; // o valor do state foi desestruturado
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
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.resetForm }
        />
        {data.map((element) => (<Card
          key={ element.cardName }
          cardName={ element.cardName }
          cardDescription={ element.cardDescription }
          cardAttr1={ element.cardAttr1 }
          cardAttr2={ element.cardAttr2 }
          cardAttr3={ element.cardAttr3 }
          cardImage={ element.cardImage }
          cardRare={ element.cardRare }
          cardTrunfo={ element.cardTrunfo }
        />))}
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
