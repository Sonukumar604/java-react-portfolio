import axios from 'axios';

const PORTFOLIO_API_URL = 'http://localhost:8080/api/portfolio';

export const fetchPortfolioData = async () => {
  const response = await axios.get(PORTFOLIO_API_URL);
  return response.data;
};
