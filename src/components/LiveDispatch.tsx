import { Phone } from "lucide-react";

/**
 * Static trust strip for the hero.
 * Replaces the previous widget that showed a random "technicians available" count,
 * a geo-located zip code and an unsourced "4.9/5" rating. None of that was real data.
 */
export default function LiveDispatch() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid var(--safety-green)',
          color: 'var(--safety-green)',
          padding: '6px 14px',
          borderRadius: '50px',
          fontSize: '0.85rem',
          fontWeight: 600,
        }}
      >
        <Phone size={14} /> Dispatch open 24/7 &middot; Call for a live ETA
      </div>
    </div>
  );
}
