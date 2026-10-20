"use client";

import { useState } from "react";
import { Send, Car, MapPin, Phone, User, MessageSquare, Camera, CheckCircle2, Zap } from "lucide-react";
import { business } from "@/lib/business";

const field = "w-full p-4 bg-[rgba(15,23,42,0.5)] border border-[var(--border-color)] rounded-xl focus:border-[var(--action-orange)] focus:ring-1 focus:ring-[var(--action-orange)] outline-none transition-all text-white";
const label = "flex items-center gap-2 text-[var(--text-primary)] mb-2 text-sm font-medium";

export default function QuoteFormEs() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("lang", "es");
    try {
      const res = await fetch("/api/telegram", { method: "POST", body: data });
      const result = await res.json();
      if (res.ok && result.success) {
        setStatus({ success: true, message: "¡Solicitud recibida! Revisaremos sus datos y nos comunicaremos con usted pronto." });
        form.reset();
      } else {
        setStatus({ success: false, message: `No se pudo enviar. Por favor llame al ${business.phoneDisplay}.` });
      }
    } catch {
      setStatus({ success: false, message: `Error de conexión. Llame al ${business.phoneDisplay} para una cotización inmediata.` });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="card p-8 md:p-12 bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-2xl relative overflow-hidden rounded-3xl">
      <h2 className="text-3xl font-bold mb-8">Formulario de cotización</h2>
      {status && (
        <div role="status" className={`p-5 mb-8 rounded-xl border flex items-center gap-3 ${status.success ? "bg-green-500/10 border-green-500/30 text-[var(--safety-green)]" : "bg-red-500/10 border-red-500/30 text-red-500"}`}>
          {status.success ? <CheckCircle2 size={24} className="shrink-0" /> : <Zap size={24} className="shrink-0" />}
          <p className="font-medium m-0">{status.message}</p>
        </div>
      )}
      <form onSubmit={onSubmit} className="space-y-6">
        <input type="hidden" name="lang" value="es" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={label}><User size={16} className="text-[var(--action-orange)]" /> Nombre completo</label>
            <input type="text" id="name" name="name" className={field} required placeholder="Juan Pérez" autoComplete="name" />
          </div>
          <div>
            <label htmlFor="phone" className={label}><Phone size={16} className="text-[var(--action-orange)]" /> Teléfono o correo electrónico</label>
            <input type="text" id="phone" name="phone" className={field} required placeholder="(555) 000-0000 o correo" autoComplete="tel" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="location" className={label}><MapPin size={16} className="text-[var(--action-orange)]" /> Ubicación (condado)</label>
            <select id="location" name="location" className={field} required defaultValue="">
              <option value="" disabled>Elija un condado</option>
              <option value="manhattan">Manhattan</option>
              <option value="brooklyn">Brooklyn</option>
              <option value="queens">Queens</option>
              <option value="bronx">El Bronx</option>
              <option value="staten-island">Staten Island</option>
            </select>
          </div>
          <div>
            <label htmlFor="vehicle" className={label}><Car size={16} className="text-[var(--action-orange)]" /> Marca y año del carro</label>
            <input type="text" id="vehicle" name="vehicle" className={field} required placeholder="Ej.: Honda Civic 2020" />
          </div>
        </div>
        <div>
          <label htmlFor="issue" className={label}><MessageSquare size={16} className="text-[var(--action-orange)]" /> Servicio que necesita / detalles</label>
          <textarea id="issue" name="issue" rows={4} className={field} required placeholder="Cuéntenos qué pasa (ej.: necesito una llave nueva, el encendido no gira, es una emergencia o quiero programar una cita)"></textarea>
        </div>
        <div>
          <label htmlFor="image" className={label}><Camera size={16} className="text-[var(--action-orange)]" /> Foto de la llave o la cerradura (opcional)</label>
          <div className="border-2 border-dashed border-[var(--border-color)] rounded-xl p-8 text-center bg-white/5">
            <input type="file" id="image" name="image" accept="image/*" className="mx-auto cursor-pointer" />
            <p className="text-[var(--slate-light)] text-sm mt-4 mb-0">Una foto nos ayuda a identificar el tipo de llave o de chip.</p>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-full py-4 text-lg font-bold flex justify-center items-center gap-3 mt-4" disabled={submitting}>
          {submitting ? "Enviando..." : (<><Send size={20} /> Pedir cotización</>)}
        </button>
      </form>
    </div>
  );
}
