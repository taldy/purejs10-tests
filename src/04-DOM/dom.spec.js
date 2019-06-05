import { insertCardToDOM } from './dom';
import * as cardModule from './card';

describe('DOM', () => {
  describe('insertCardToDOM(): ', () => {
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

    it('should build correct DOM', () => {
      insertCardToDOM(card, wrapper);

      const cardContainer = wrapper.querySelector('.card');
      expect(cardContainer).not.toBeNull();
      expect(cardContainer.getAttribute('data-card-id')).toEqual(String(card.id));
      expect(cardContainer.querySelector('p').textContent).toEqual(card.title);

      expect(cardContainer.querySelector('button')).not.toBeNull();
    });

    it('should call removeCard() function on remove button click', () => {
      insertCardToDOM(card, wrapper);

      const spy = jest.spyOn(cardModule, 'removeCard');

      wrapper.querySelector('button').click();

      expect(spy).toHaveBeenCalledWith(card.id);
    });
  });
});
