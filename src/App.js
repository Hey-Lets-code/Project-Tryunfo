import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: '' };

  onInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo } = this.state; // o valor do state foi desestruturado
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
