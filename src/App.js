import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import { data as buttons } from './data';

//setting baseLink
const baseUrl = 'https://excuser.herokuapp.com/v1/excuse';

function App() {
  //currently showing excuse
  const [excuse, setExcuse] = useState(null);
  const [isMiniLoading, setIsMiniLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const hideLoader = () => {
    setIsLoading(false);
    setIsMiniLoading(false);
  };

  const getData = async (cat) => {
    setIsMiniLoading(true);
    try {
      if (typeof cat === 'string') {
        const { data } = await axios.get(`${baseUrl}/${cat}`);
        setExcuse(data[0].excuse);
        hideLoader();
      } else if (typeof cat === 'number') {
        const {
          data: { excuse },
        } = await axios.get(`${baseUrl}/id/${cat}`);
        setExcuse(excuse);
        hideLoader();
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData(408); //getting data from the api with id -> to always show the excuse(given in design) on first render
  }, []);

  if (isLoading) {
    return <div className='loader'></div>;
  } else {
    return (
      <div className='App'>
        <h1>Generate an Excuse</h1>
        <div className='underline'></div>
        <div className='container'>
          {buttons.map((button, index) => {
            return (
              <Button key={index} getData={getData}>
                {button}
              </Button>
            );
          })}
        </div>
        <div className='card'>
          {isMiniLoading ? (
            <div className='loader-mini'></div>
          ) : (
            excuse && <p>{excuse}</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
