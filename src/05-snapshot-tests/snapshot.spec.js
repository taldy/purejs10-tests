import axios from 'axios';
import { insertCardToDOM } from '../04-DOM/dom';

describe('snapshots', () => {
  describe('insertCardToDOM', () => {
    let card;
    let wrapper;

    beforeEach(() => {
      card = {
        id: 111,
        title: 'Learn JS',
        columns: 5,
      };

      wrapper = document.createElement('div');
      document.body.append(wrapper);
    });

    afterEach(() => {
      wrapper.remove();
      wrapper = null;
    });

    it('card html snapshot', () => {
      insertCardToDOM(card, wrapper);
      const cardContainer = wrapper.querySelector('.card');

      expect(cardContainer.outerHTML).toMatchSnapshot();
    });
  });

  it('jsonplaceholder /todos/1 JSON', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    expect(res.data).toMatchSnapshot();
  });
});
