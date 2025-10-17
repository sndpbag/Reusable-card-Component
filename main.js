// Import the createCard function from the Card component file
import { createCard } from './components/Card.js';

// Get the root element where we will render our cards
const app = document.getElementById('app');

// Sample data for our cards
const cardData = [
  {
    imgSrc: 'https://via.placeholder.com/300x150/FFC107/000000?text=JS',
    title: 'JavaScript',
    description: 'A versatile language for web development.',
  },
  {
    imgSrc: 'https://via.placeholder.com/300x150/03A9F4/FFFFFF?text=React',
    title: 'React',
    description: 'A popular library for building user interfaces.',
  },
  {
    imgSrc: 'https://via.placeholder.com/300x150/4CAF50/FFFFFF?text=Vue',
    title: 'Vue.js',
    description: 'A progressive framework for building web apps.',
  },
];

// Loop through the data and create a card for each item
cardData.forEach((data) => {
  const cardElement = createCard(data); // Call the component function
  app.appendChild(cardElement);       // Add the card to the page
});