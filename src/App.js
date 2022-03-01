import React, { useState, useEffect } from 'react';
import { Map } from './component/Map';
import { Loading } from './component/Loading';
import Header from './component/Header';

function App() {

  const [eventData, setEventData] = useState('')
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const resp = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await resp.json();

      setEventData(events);
      setLoading(false)

    } catch (error) {
      setLoading(true)
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className='app'>
      <Header />
      {loading ? <Loading /> : <Map eventData={eventData} />}

    </div>
  )


}

export default App;