import { useState } from 'react'
import MapComponent from './components/Map.jsx'
import Chat from './components/Chat.jsx';

const App = () => {
  
  let [places, setPlaces] = useState([]);
  let [error, setErrorHandler] = useState(false)

  const [center, setCenter] = useState(
    { lat: -27.33056, lng: -55.86667 }
  );


  return (
    <>
      <div className="w-full h-full m-0 p-3 bg-slate-50 flex">
        <MapComponent locations={places} setErrorHandler={setErrorHandler} className={`hidden`} center={center} setCenter={setCenter} />
        <Chat setPlaces={setPlaces} error={error} locations={places} setErrorHandler={setErrorHandler} setCenter={setCenter} />
      </div>
    </>
  );
};

export default App;