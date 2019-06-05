import axios from 'axios';
import { saveCard } from './repository';

describe('repository', () => {
  describe('saveCard(): ', () => {
    it('shold call axios.post() with correct params', async () => {
      const card = {
        title: 'Learn JS',
        column: 5,
      };

      const responseCard = { ...card, id: 111 };

      axios.post = jest.fn().mockReturnValue(Promise.resolve({ data: responseCard}));

      const result = await saveCard(card);
      expect(axios.post).toHaveBeenCalledWith('/api/card', card);
      expect(result).toEqual(responseCard);
    });
  });
});
