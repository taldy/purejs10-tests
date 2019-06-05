import axios from 'axios';

export function saveCard(card) {
  return axios.post('/api/card', card)
    .then(response => response.data);
}
