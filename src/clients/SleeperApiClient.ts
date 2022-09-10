import axios from 'axios';

const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const SleeperApiClient = {
  getUser: async (userName: string) => {
    const { data } = await axios.get<any>(`https://api.sleeper.app/v1/user/${userName}`, {
      headers: HEADERS,
    });

    return data;
  },
};

export default SleeperApiClient;
