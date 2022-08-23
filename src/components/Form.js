import React from 'react';
// import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    return (
      <section>
        <form>
          <div>
            {/* <label htmlFor='name'>Nome</label> */}
            <input
              type="text"
              id="name"
              data-testid="name-input"
            />
          </div>
          <div>
            {/* <label htmlFor='description'>Descrição</label> */}
            <textarea id="description" data-testid="description-input" />
          </div>
          <div>
            {/* <label htmlFor='number1'>Atributo 01</label> */}
            <input id="number1" type="number" data-testid="attr1-input" />
          </div>
          <div>
            {/* <label htmlFor='number2'>Atributo 02</label> */}
            <input id="number2" type="number" data-testid="attr2-input" />
          </div>
          <div>
            {/* <label htmlFor='number3'>Atributo 03</label> */}
            <input id="number3" type="number" data-testid="attr3-input" />
          </div>
          <div>
            <input type="text" data-testid="image-input" />
          </div>
          <div>
            {/* <label htmlFor="rare">Raridade</label> */}
            <select id="rare" data-testid="rare-input">
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </div>
          <div>
            {/* <label htmlFor="trunfo">Super Trunfo </label> */}
            <input type="checkbox" data-testid="trunfo-input" id="trunfo" />
          </div>
          <div>
            <button type="submit" data-testid="save-button">Salvar</button>
          </div>
        </form>
      </section>
    );
  }
}

export default Form;
