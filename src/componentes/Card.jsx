'use client';

export default function Card({ card, isFlipped, onClick }) {
  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={onClick}
    >
      {/* Frente de la carta (Tapa) */}
      <div className="card-face card-front">♡</div>

      {/* Dorso de la carta (Personaje de la API) */}
      <div className="card-face card-back">
        {card.imagen ? (
          <img
            src={card.imagen}
            alt={card.nombre}
            style={{ width: '100%', height: '100%', borderRadius: '8px', objectFit: 'cover' }}
          />
        ) : (
          card.icon
        )}
      </div>
    </div>
  );
}