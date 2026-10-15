'use client';

import { useState, useEffect } from 'react';
import Card from './componentes/Card';
import { obtenerCartasRickAndMorty } from './app/actions';

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [lockBoard, setLockBoard] = useState(true);
  const [previewActive, setPreviewActive] = useState(false);

  const [showStartModal, setShowStartModal] = useState(true);
  const [showVictoryModal, setShowVictoryModal] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [isCounting, setIsCounting] = useState(false);

  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    initGame();
  }, []);

  const initGame = async () => {
    setLoading(true);
    setErrorMsg(null);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setLockBoard(true);
    setPreviewActive(false);
    setShowVictoryModal(false);

    // Invocamos la Server Action para traer los personajes de la API
    const res = await obtenerCartasRickAndMorty();

    if (res.ok) {
      // Duplicamos los 8 personajes para armar 16 cartas (8 parejas)
      const paired = [...res.cartas, ...res.cartas];
      const shuffled = shuffle(paired).map((char, index) => ({
        ...char,
        uniqueId: index
      }));
      setCards(shuffled);
    } else {
      setErrorMsg(res.error);
    }
    setLoading(false);
  };

  const startPreview = () => {
    setPreviewActive(true);
    setLockBoard(true);

    setTimeout(() => {
      setPreviewActive(false);
      setLockBoard(false);
    }, 1000);
  };

  const handleStartGame = () => {
    setIsCounting(true);
    let count = 3;
    setCountdown(count);

    const timer = setInterval(() => {
      count--;
      if (count > 0) {
        setCountdown(count);
      } else if (count === 0) {
        setCountdown("¡Ya!");
      } else {
        clearInterval(timer);
        setShowStartModal(false);
        setIsCounting(false);
        setCountdown(null);
        startPreview();
      }
    }, 1000);
  };

  const handleCardClick = (index) => {
    if (lockBoard) return;
    if (flippedCards.includes(index)) return;
    if (matchedCards.includes(index)) return;

    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((prev) => prev + 1);
      setLockBoard(true);

      const [firstIdx, secondIdx] = newFlipped;

      // Comparamos por el id del personaje devuelto por la API
      if (cards[firstIdx].id === cards[secondIdx].id) {
        const newMatched = [...matchedCards, firstIdx, secondIdx];
        setMatchedCards(newMatched);
        setFlippedCards([]);
        setLockBoard(false);

        if (newMatched.length === cards.length) {
          setTimeout(() => {
            setShowVictoryModal(true);
          }, 500);
        }
      } else {
        setTimeout(() => {
          setFlippedCards([]);
          setLockBoard(false);
        }, 1000);
      }
    }
  };

  const handleRestart = () => {
    initGame();
    setShowStartModal(true);
  };

  return (
    <main className="game-container">
      <h1>Memotest</h1>

      <div className="stats-board">
        <div className="stat">Movimientos: <span>{moves}</span></div>
        <button id="restart-btn" onClick={handleRestart} disabled={loading}>
          {loading ? 'Cargando...' : 'Reiniciar Juego'}
        </button>
      </div>

      {errorMsg && <p style={{ color: '#ff6b6b' }}>⚠️ {errorMsg}</p>}

      <div className="grid-container" id="grid">
        {cards.map((card, index) => {
          const isFlipped = previewActive || flippedCards.includes(index) || matchedCards.includes(index);
          return (
            <Card
              key={card.uniqueId}
              card={card}
              isFlipped={isFlipped}
              onClick={() => handleCardClick(index)}
            />
          );
        })}
      </div>

      {/* Modal de Inicio */}
      {showStartModal && (
        <div id="start-modal" className="modal">
          <div className="modal-content">
            <h2>✨ Memotest ✨</h2>
            {!isCounting && <p>{loading ? 'Cargando personajes...' : 'Presiona el botón para comenzar'}</p>}
            {!isCounting && (
              <button id="start-btn" onClick={handleStartGame} disabled={loading}>
                Comenzar Partida
              </button>
            )}
            {countdown !== null && (
              <div id="countdown" style={{ fontSize: '2.5rem', marginTop: '15px', fontWeight: 'bold' }}>
                {countdown}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal de Victoria */}
      {showVictoryModal && (
        <div id="victory-modal" className="modal">
          <div className="modal-content">
            <h2>🎉 ¡Felicidades! 🎉</h2>
            <p>Completaste el juego en <span>{moves}</span> movimientos.</p>
            <button id="modal-restart-btn" onClick={handleRestart}>Jugar de nuevo</button>
          </div>
        </div>
      )}
    </main>
  );
}