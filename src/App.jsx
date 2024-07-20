import { useState } from 'react'
import MapComponent from './components/Map.jsx'
import Chat from './components/Chat.jsx';
import LoaderModal from './components/LoaderModal.jsx';

const App = () => {
  let [places, setPlaces] = useState([]);
  let [error, setErrorHandler] = useState(false)


  return (
    <>
      <div className="w-full h-full m-0 p-3 bg-slate-50 flex">
        <MapComponent locations={places} setErrorHandler={setErrorHandler} className={`hidden`} />
        <Chat setPlaces={setPlaces} error={error} locations={places} setErrorHandler={setErrorHandler} />
      </div>
    </>
  );
};

export default App;