import axios from 'axios';

export default {
  getOne: async (cep) => {
    const { data } = await axios.get(`${process.env.REACT_APP_BUSCACEP_API_URL}/${cep.replace('-', '')}/json`);

    return data;
  },
};
