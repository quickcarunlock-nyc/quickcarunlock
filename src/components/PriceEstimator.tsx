"use client";

import { useState } from "react";
import "./PriceEstimator.css";
import { Calculator } from "lucide-react";

export default function PriceEstimator() {
  const [vehicleType, setVehicleType] = useState("Sedan");
  const [tinted, setTinted] = useState("No");
  const [situation, setSituation] = useState("Keys inside car");
  const [estimatedPrice, setEstimatedPrice] = useState(55);

  const calculateEstimate = () => {
    let basePrice = 55;
    
    if (vehicleType === "SUV" || vehicleType === "Truck") basePrice += 20;
    if (vehicleType === "Box Truck") basePrice += 40;
    if (vehicleType === "18 Wheeler") basePrice += 80;
    if (tinted === "Yes") basePrice += 15;
    if (situation === "Lost keys") basePrice += 100;

    setEstimatedPrice(basePrice);
  };

  return (
    <div className="price-estimator card" style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem', justifyContent: 'center' }}>
        <Calculator size={28} color="var(--action-orange)" />
        <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Price Estimator</h3>
      </div>
      
      <div style={{ 
        backgroundColor: 'rgba(249, 115, 22, 0.05)', 
        borderLeft: '4px solid var(--action-orange)',
        padding: '1rem', 
        borderRadius: '0 8px 8px 0',
        marginBottom: '2rem',
        fontSize: '0.9rem',
        color: 'var(--text-secondary)'
      }}>
        *Service calls start from <strong>$55</strong>. This is an estimate only. The actual price varies based on condition and will be provided on-site.
      </div>

      <div className="form-group">
        <label style={{ color: 'var(--text-secondary)' }}>Vehicle Type</label>
        <select className="form-control" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Truck">Truck</option>
          <option value="Box Truck">Box Truck</option>
          <option value="18 Wheeler">18 Wheeler</option>
        </select>
      </div>

      <div className="form-group">
        <label style={{ color: 'var(--text-secondary)' }}>Tinted Windows?</label>
        <select className="form-control" value={tinted} onChange={(e) => setTinted(e.target.value)}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      <div className="form-group">
        <label style={{ color: 'var(--text-secondary)' }}>Situation</label>
        <select className="form-control" value={situation} onChange={(e) => setSituation(e.target.value)}>
          <option value="Keys inside car">Keys inside car</option>
          <option value="Lost keys">Lost keys</option>
        </select>
      </div>

      <button className="btn btn-primary" style={{ width: "100%", marginTop: "1rem" }} onClick={calculateEstimate}>
        Calculate Estimate
      </button>

      {estimatedPrice > 0 && (
        <div style={{ 
          marginTop: '2rem', 
          paddingTop: '1.5rem', 
          borderTop: '1px solid var(--border-color)',
          textAlign: 'center'
        }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Estimated Starting Price</p>
          <h2 className="text-orange-gradient" style={{ fontSize: '3rem', margin: '0 0 0.5rem 0' }}>${estimatedPrice}+</h2>
          <p style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
            Strictly an estimate. Actual price provided prior to work.
          </p>
        </div>
      )}
    </div>
  );
}
