"use client";

import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

export default function MapWrapper() {
  const position = { lat: 40.7128, lng: -74.0060 }; // NYC Center

  const pins = [
    { lat: 40.7589, lng: -73.9851, title: "Manhattan" }, // Times Square ish
    { lat: 40.7128, lng: -74.0060, title: "Lower Manhattan" },
    { lat: 40.6782, lng: -73.9442, title: "Brooklyn" },
    { lat: 40.6501, lng: -73.9496, title: "Flatbush" },
    { lat: 40.7282, lng: -73.7949, title: "Queens" },
    { lat: 40.7632, lng: -73.9189, title: "Astoria" },
    { lat: 40.8448, lng: -73.8648, title: "The Bronx" },
    { lat: 40.8126, lng: -73.9196, title: "South Bronx" },
    { lat: 40.5795, lng: -74.1502, title: "Staten Island" },
  ];

  // We are using a dummy key if not provided so it at least renders (it might show a watermark)
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  return (
    <div style={{ width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
      <APIProvider apiKey={apiKey}>
        <Map
          defaultCenter={position}
          defaultZoom={10}
          mapId="DEMO_MAP_ID"
          disableDefaultUI={true}
        >
          {pins.map((pin, index) => (
            <AdvancedMarker key={index} position={{ lat: pin.lat, lng: pin.lng }} title={pin.title}>
                <Pin background={"#F97316"} borderColor={"#1E3A8A"} glyphColor={"#FFFFFF"} />
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
    </div>
  );
}
