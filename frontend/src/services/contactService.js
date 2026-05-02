import axios from 'axios';

const CONTACT_API_URL = 'http://localhost:8080/api/contact';

export const submitContactMessage = async (payload) => {
  const response = await axios.post(CONTACT_API_URL, payload);
  return response.data;
};
