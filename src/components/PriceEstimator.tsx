"use client";

import { useState } from "react";
import "./PriceEstimator.css";

export default function PriceEstimator() {
  const [vehicleType, setVehicleType] = useState("Sedan");
  const [tinted, setTinted] = useState("No");
  const [situation, setSituation] = useState("Keys inside car");
  const [estimatedPrice, setEstimatedPrice] = useState(55);

  const calculateEstimate = () => {
    let basePrice = 55; // Base service call
    
    // Base vehicle multiplier
    if (vehicleType === "SUV" || vehicleType === "Truck") basePrice += 20;
    if (vehicleType === "Box Truck") basePrice += 40;
    if (vehicleType === "18 Wheeler") basePrice += 80;

    // Tinted windows
    if (tinted === "Yes") basePrice += 15;

    // Situation
    if (situation === "Lost keys") basePrice += 100; // Key replacement is more expensive

    setEstimatedPrice(basePrice);
  };

  return (
    <div className="price-estimator card">
      <h3 className="text-trust-blue text-center" style={{ marginBottom: "1rem" }}>Get a Price Estimate</h3>
      <p className="text-slate-gray text-center disclaimer">
        *Service calls start from $55. This is just an estimate. Actual price varies based on condition and will be provided before starting work.
      </p>

      <div className="form-group">
        <label>Vehicle Type</label>
        <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Truck">Truck</option>
          <option value="Box Truck">Box Truck</option>
          <option value="18 Wheeler">18 Wheeler</option>
        </select>
      </div>

      <div className="form-group">
        <label>Tinted Windows?</label>
        <select value={tinted} onChange={(e) => setTinted(e.target.value)}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      <div className="form-group">
        <label>Situation</label>
        <select value={situation} onChange={(e) => setSituation(e.target.value)}>
          <option value="Keys inside car">Keys inside car</option>
          <option value="Lost keys">Lost keys</option>
        </select>
      </div>

      <button className="btn btn-primary w-100" style={{ marginTop: "1rem", width: "100%" }} onClick={calculateEstimate}>
        Calculate Estimate
      </button>

      {estimatedPrice > 0 && (
        <div className="estimate-result text-center" style={{ marginTop: "1.5rem" }}>
          <p className="text-slate-gray" style={{ marginBottom: "0.25rem" }}>Estimated Price:</p>
          <h2 className="text-action-orange" style={{ margin: "0.5rem 0" }}>Starting at ${estimatedPrice}+</h2>
          <p className="text-slate-gray" style={{ fontSize: "0.85rem", fontStyle: "italic" }}>
            Prices are strictly estimates only. Actual price will be provided on-site before work begins.
          </p>
        </div>
      )}
    </div>
  );
}
