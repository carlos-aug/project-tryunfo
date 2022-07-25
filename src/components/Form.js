import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input id="name" type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="textarea" id="description" data-testid="description-input" />
        </label>
        <label htmlFor="attr1">
          Attr01
          <input type="number" id="attr1" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2">
          Attr02
          <input type="number" id="attr2" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3">
          Attr03
          <input type="number" id="attr3" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          Imagem
          <input type="text" id="image" data-testid="image-input" />
        </label>
        <label htmlFor="rare">
          <select id="rare" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <input type="checkbox" id="" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
