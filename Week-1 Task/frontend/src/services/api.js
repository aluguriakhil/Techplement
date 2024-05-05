import axios from 'axios';

// Accessing environment variable defined in .env file
const baseURL = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
  baseURL,
});

export const getAllQuotes = async () => {
  const response = await api.get('/quotes');
  return response.data;
};

export const getQuotesByAuthor = async (authorName) => {
  const response = await api.get(`/quotes/${authorName}`);
  return response.data;
};

export const addNewAuthor = async (authorData) => {
  const response = await api.post('/authors', authorData);
  return response.data;
};



