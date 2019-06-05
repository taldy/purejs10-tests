import { removeCard } from './card';

export function insertCardToDOM(card, target) {
  const container = document.createElement('div');
  container.classList.add('card');
  container.setAttribute('data-card-id', card.id);

  const content = document.createElement('p');
  content.append(card.title);
  container.append(content);

  const removeButton = document.createElement('button');
  removeButton.append('X');
  removeButton.addEventListener('click', () => removeCard(card.id));
  container.append(removeButton);

  target.append(container);
}
