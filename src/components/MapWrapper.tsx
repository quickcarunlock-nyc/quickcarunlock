"use client";

import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

export default function MapWrapper() {
  const position = { lat: 40.7128, lng: -74.0060 }; // NYC Center

  const pins = [
    // Manhattan
    { lat: 40.7589, lng: -73.9851, title: "Midtown Manhattan" },
    { lat: 40.7128, lng: -74.0060, title: "Financial District" },
    { lat: 40.7834, lng: -73.9797, title: "Upper West Side" },
    { lat: 40.8116, lng: -73.9465, title: "Harlem" },
    { lat: 40.7465, lng: -74.0014, title: "Chelsea" },
    // Brooklyn
    { lat: 40.7081, lng: -73.9571, title: "Williamsburg" },
    { lat: 40.6782, lng: -73.9442, title: "Bed-Stuy" },
    { lat: 40.6669, lng: -73.9806, title: "Park Slope" },
    { lat: 40.6262, lng: -74.0329, title: "Bay Ridge" },
    { lat: 40.5755, lng: -73.9707, title: "Coney Island" },
    // Queens
    { lat: 40.7632, lng: -73.9189, title: "Astoria" },
    { lat: 40.7447, lng: -73.9485, title: "Long Island City" },
    { lat: 40.7675, lng: -73.8331, title: "Flushing" },
    { lat: 40.7027, lng: -73.7891, title: "Jamaica" },
    { lat: 40.5861, lng: -73.8123, title: "Rockaway Beach" },
    // Bronx
    { lat: 40.8448, lng: -73.8648, title: "Morris Park" },
    { lat: 40.8908, lng: -73.9125, title: "Riverdale" },
    { lat: 40.8614, lng: -73.8906, title: "Fordham" },
    { lat: 40.8126, lng: -73.9196, title: "Mott Haven" },
    // Staten Island
    { lat: 40.6445, lng: -74.0805, title: "St. George" },
    { lat: 40.5795, lng: -74.1502, title: "New Springville" },
    { lat: 40.5088, lng: -74.2355, title: "Tottenville" },
    { lat: 40.5735, lng: -74.1124, title: "New Dorp" },
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
