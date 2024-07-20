import { useCallback, useEffect, useRef, useState } from "react";

import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
  useMap,
} from "@vis.gl/react-google-maps";

import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { Circle } from "./Circle.jsx";

// import {main} from '../utils/modelConfig.js'

const MapComponent = ({ locations = [], center, setCenter}) => {
  return (
    <div className="h-full w-3/5 rounded-md">
      <APIProvider
        apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        onLoad={() => console.log("Maps API has loaded.")}
      >
        <Map
          defaultZoom={13}
          defaultCenter={center}
          center={center}
          onCameraChanged={(ev) =>
            setCenter(ev.detail.center)
          }
          mapId="da37f3254c6a6d1c"
        >
          <PoiMarkers locations={locations} />
        </Map>
      </APIProvider>
    </div>
  );
};

const PoiMarkers = ({ locations = [] }) => {
  const map = useMap();
  const [markers, setMarkers] = useState({});
  const clusterer = useRef(null);
  const [circleCenter, setCircleCenter] = useState(null);
  const handleClick = useCallback((ev) => {
    if (!map) return;
    if (!ev.latLng) return;
    map.panTo(ev.latLng);
    setCircleCenter(ev.latLng);
  });
  // Initialize MarkerClusterer, if the map has changed
  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  // Update markers, if the markers array has changed
  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker, key) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  return (
    <>
      <Circle
        radius={800}
        center={circleCenter}
        strokeColor={"#0c4cb3"}
        strokeOpacity={1}
        strokeWeight={3}
        fillColor={"#3b82f6"}
        fillOpacity={0.3}
      />
      {Array.isArray(locations) && locations.length > 0 &&
        locations.map((poi) => (
          <AdvancedMarker
            title={poi.key}
            key={poi.key}
            position={poi.location}
            clickable={true}
            onClick={handleClick}
          >
            <Pin
              background={"#fb5252"}
              glyphColor={"#b02a2a"}
              borderColor={"#00000"}
            />
          </AdvancedMarker>
        ))}
    </>
  );
};

export default MapComponent;
