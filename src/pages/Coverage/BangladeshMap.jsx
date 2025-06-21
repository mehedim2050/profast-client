
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Component to pan the map to a searched district
const FlyToDistrict = ({ warehouse, searchQuery }) => {
  const map = useMap();

  React.useEffect(() => {
    if (searchQuery) {
      const match = warehouse.find(w =>
        w.district.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (match) {
        map.flyTo([match.latitude, match.longitude], 14, {
          duration: 1.5,
        });
      }
    }
  }, [searchQuery, warehouse, map]);

  return null;
};

const BangladeshMap = ({ warehouse, searchQuery }) => {
  const bangladeshPosition = [23.6850, 90.3563];

  return (
    <div className="w-full h-[800px] rounded-lg shadow-lg overflow-hidden">
      <MapContainer center={bangladeshPosition} zoom={8} scrollWheelZoom={false} className="w-full h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FlyToDistrict warehouse={warehouse} searchQuery={searchQuery} />

        {warehouse.map((center, index) => (
          <Marker
            key={index}
            position={[center.latitude, center.longitude]}
            icon={customIcon}
          >
            <Popup>
              <strong>{center.district}</strong><br />
              Covered Areas: {center.covered_area?.join(', ')}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BangladeshMap;
