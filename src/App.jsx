import { useState } from 'react'
import MapComponent from './components/Map.jsx'
import Chat from './components/Chat.jsx';

const App = () => {
  let [places, setPlaces] = useState([]);

  return (
    <>
      <div className="w-full h-full m-0 p-3 bg-slate-50 flex">
        <MapComponent locations={places} />
        <Chat setPlaces={setPlaces} />
      </div>
    </>
  );
};

export default App;