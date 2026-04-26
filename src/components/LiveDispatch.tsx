"use client";

import { useState, useEffect } from "react";
import { Star, Truck } from "lucide-react";

export default function LiveDispatch() {
  const [location, setLocation] = useState("New York City");
  const [zipcode, setZipcode] = useState("10001");
  const [techsAvailable, setTechsAvailable] = useState<number | null>(null);
  const [dispatchedMsg, setDispatchedMsg] = useState("");

  useEffect(() => {
    let isMounted = true;

    // 1. Fetch IP-based location
    async function fetchLocation() {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        if (isMounted && data.city) {
          // Check if it's close to NY or just use their city to create urgency
          setLocation(data.city);
          if (data.postal) setZipcode(data.postal);
        }
      } catch (e) {
        console.log("Geolocation fetch failed, defaulting to NYC.");
      }
    }
    fetchLocation();

    // 2. Set random initial technicians
    const initialTechs = Math.floor(Math.random() * 4) + 4; // 4 to 7
    setTechsAvailable(initialTechs);

    // 3. Dispatch event after ~22 seconds
    const dispatchTimer = setTimeout(() => {
      if (isMounted) {
        setTechsAvailable(prev => (prev && prev > 1) ? prev - 1 : 1);
        setDispatchedMsg("Just dispatched to a nearby call");
      }
    }, 22000);

    return () => {
      isMounted = false;
      clearTimeout(dispatchTimer);
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        {/* Dynamic Technician Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--safety-green)', color: 'var(--safety-green)', padding: '6px 14px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600 }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--safety-green)', boxShadow: '0 0 10px var(--safety-green)', animation: 'pulse 2s infinite' }}></span>
          {techsAvailable !== null ? `${techsAvailable} Technicians Available Near ${location}` : 'Live Dispatch: Finding Technicians...'}
        </div>

        {/* Rating Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'rgba(255, 193, 7, 0.1)', border: '1px solid #FFC107', color: '#FFC107', padding: '6px 14px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600 }}>
          <div style={{ display: 'flex' }}>
            <Star size={14} fill="#FFC107" /><Star size={14} fill="#FFC107" /><Star size={14} fill="#FFC107" /><Star size={14} fill="#FFC107" /><Star size={14} fill="#FFC107" />
          </div>
          4.9/5 Average Rating
        </div>
      </div>

      {/* Dispatched Notification */}
      <div style={{ 
        height: '20px', 
        opacity: dispatchedMsg ? 1 : 0, 
        transition: 'opacity 0.5s ease',
        display: 'flex', 
        alignItems: 'center', 
        gap: '6px', 
        color: 'var(--action-orange)', 
        fontSize: '0.85rem', 
        fontWeight: 500 
      }}>
        <Truck size={14} /> 1 tech {dispatchedMsg} in {zipcode}
      </div>

    </div>
  );
}
