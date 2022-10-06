import React, { useEffect } from 'react';
import SleeperApiClient from '../clients/SleeperApiClient';

const Home = () => {
  useEffect(() => {
    const fetchUser = async () => {
      await SleeperApiClient.getUser('palet')
        .then(response => {
          //handle success
          console.log('success:', response);
        })
        .catch(error => {
          //handle error
          console.log('error:', error);
        });
    };

    fetchUser();
  }, []);

  return <h1>Home</h1>;
};

export default Home;
