"use client";

import { useState } from "react";
import "../PriceEstimator.css";
import { Calculator } from "lucide-react";
import { business } from "@/lib/business";

// Same logic and amounts as src/components/PriceEstimator.tsx. If you change one, change both.
const BASE = parseInt(business.startingPrices[0].price.replace(/[^0-9]/g, ""), 10) || 55;

export default function PriceEstimatorEs() {
  const [vehicleType, setVehicleType] = useState("Sedan");
  const [tinted, setTinted] = useState("No");
  const [situation, setSituation] = useState("inside");
  const [estimatedPrice, setEstimatedPrice] = useState(BASE);

  const calculate = () => {
    let price = BASE;
    if (vehicleType === "SUV" || vehicleType === "Camioneta") price += 20;
    if (vehicleType === "Camión de carga") price += 40;
    if (vehicleType === "Camión de 18 ruedas") price += 80;
    if (tinted === "Sí") price += 15;
    if (situation === "lost") price += 100;
    setEstimatedPrice(price);
  };

  return (
    <div className="price-estimator card" style={{ padding: "2rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem", justifyContent: "center" }}>
        <Calculator size={28} color="var(--action-orange)" />
        <h3 style={{ margin: 0, fontSize: "1.5rem" }}>Estimador de precios</h3>
      </div>

      <div style={{ backgroundColor: "rgba(249, 115, 22, 0.05)", borderLeft: "4px solid var(--action-orange)", padding: "1rem", borderRadius: "0 8px 8px 0", marginBottom: "2rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
        *Las visitas empiezan desde <strong>${BASE}</strong>. Es solo un estimado. El precio real depende del caso y se le dice antes de empezar el trabajo.
      </div>

      <div className="form-group">
        <label htmlFor="vt" style={{ color: "var(--text-secondary)" }}>Tipo de vehículo</label>
        <select id="vt" className="form-control" value={vehicleType} onChange={e => setVehicleType(e.target.value)}>
          <option value="Sedan">Sedán</option>
          <option value="SUV">SUV</option>
          <option value="Camioneta">Camioneta (pickup)</option>
          <option value="Camión de carga">Camión de carga</option>
          <option value="Camión de 18 ruedas">Camión de 18 ruedas</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="tn" style={{ color: "var(--text-secondary)" }}>¿Vidrios polarizados?</label>
        <select id="tn" className="form-control" value={tinted} onChange={e => setTinted(e.target.value)}>
          <option value="No">No</option>
          <option value="Sí">Sí</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="st" style={{ color: "var(--text-secondary)" }}>Situación</label>
        <select id="st" className="form-control" value={situation} onChange={e => setSituation(e.target.value)}>
          <option value="inside">Llaves dentro del carro</option>
          <option value="lost">Llaves perdidas</option>
        </select>
      </div>

      <button className="btn btn-primary" style={{ width: "100%", marginTop: "1rem" }} onClick={calculate}>
        Calcular estimado
      </button>

      <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border-color)", textAlign: "center" }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem" }}>Precio estimado desde</p>
        <h2 className="text-orange-gradient" style={{ fontSize: "3rem", margin: "0 0 0.5rem 0" }}>${estimatedPrice}+</h2>
        <p style={{ fontSize: "0.8rem", color: "#94A3B8" }}>Es solo un estimado. El precio real se le dice antes de empezar el trabajo.</p>
      </div>
    </div>
  );
}
