import axios from 'axios';

const Api = {
  get: async (url: string, params?: unknown): Promise<unknown> => {
    const response = await axios.get(url, { params });
    return response?.data;
  },
};

export default Api;
