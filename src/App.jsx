import { useState } from 'react'
import MapComponent from './components/Map.jsx'
import Chat from './components/Chat.jsx';
import LoaderModal from './components/LoaderModal.jsx';

const App = () => {
  let [places, setPlaces] = useState([]);


  return (
    <>
      <div className="w-full h-full m-0 p-3 bg-slate-50 flex">
        <MapComponent locations={places} className={`hidden`} />
        <Chat setPlaces={setPlaces} locations= {places}/>
      </div>
    </>
  );
};

export default App;