import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <div>
          <label htmlFor="name">
            Nome
            <input
              name="cardName"
              type="text"
              id="name"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Descrição
            <textarea
              name="cardDescription"
              id="description"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="number1">
            Atributo 01
            <input
              name="cardAttr1"
              id="number1"
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="number2">
            Atributo 02
            <input
              name="cardAttr2"
              id="number2"
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="number3">
            Atributo 03
            <input
              name="cardAttr3"
              id="number3"
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <input
            name="cardImage"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <label htmlFor="rare">
            Raridade
            <select
              name="cardRare"
              id="rare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="trunfo">
            {/* {hasTrunfo && 'Super Trunfo'} */}
            Super Trunfo
            {
              !hasTrunfo ? (<input
                name="cardTrunfo"
                type="checkbox"
                data-testid="trunfo-input"
                id="trunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />)
                : 'Você já tem um Super Trunfo em seu baralho'
            }
          </label>
        </div>
        <div>
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
