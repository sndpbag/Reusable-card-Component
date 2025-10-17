/**
 * Card Component
 * @param {object} props - The properties for the card.
 * @param {string} props.imgSrc - The source for the image.
 * @param {string} props.title - The title of the card.
 * @param {string} props.description - The description text for the card.
 * @returns {HTMLElement} - The card element.
 */
export const createCard = (props) => {
  // Create the main card container
  const card = document.createElement('div');
  card.className = 'card';

  // Create the image element
  const img = document.createElement('img');
  img.src = props.imgSrc;
  img.alt = props.title;

  // Create the title element
  const title = document.createElement('h3');
  title.textContent = props.title;

  // Create the description element
  const description = document.createElement('p');
  description.textContent = props.description;

  // Add all parts to the card container
  card.append(img, title, description);

  // Return the complete card element
  return card;
};