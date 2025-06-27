import React, { useState } from 'react';

export default function Quiz({ questions }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[current];

  const handleSelect = (choiceIndex) => {
    if (showAnswer || finished) return;

    setSelected(choiceIndex);
    setShowAnswer(true);

    if (choiceIndex === currentQuestion.answer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(prev => prev + 1);
      setSelected(null);
      setShowAnswer(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setShowAnswer(false);
    setScore(0);
    setFinished(false);
  };

  return (
    <div style={{ border: '2px solid #eee', padding: '1rem', borderRadius: '8px', maxWidth: 600, margin: '2rem auto' }}>
      {!finished ? (
        <>
          <h3 style={{ marginBottom: '1rem' }}>{currentQuestion.question}</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {currentQuestion.choices.map((choice, index) => {
              const isCorrect = index === currentQuestion.answer;
              const isSelected = index === selected;
              return (
                <li
                  key={index}
                  onClick={() => handleSelect(index)}
                  style={{
                    padding: '0.75rem 1rem',
                    marginBottom: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '6px',
                    cursor: showAnswer ? 'default' : 'pointer',
                    backgroundColor:
                      showAnswer && isSelected
                        ? isCorrect
                          ? '#c8e6c9'
                          : '#ffcdd2'
                        : showAnswer && isCorrect
                        ? '#c8e6c9'
                        : '',
                  }}
                >
                  {choice}
                </li>
              );
            })}
          </ul>
          {showAnswer && (
            <div style={{ marginTop: '1rem' }}>
              {selected === currentQuestion.answer ? (
                <p style={{ color: 'green' }}>✅ ¡Correcto!</p>
              ) : (
                <p style={{ color: 'red' }}>
                  ❌ Incorrecto. La respuesta correcta es: <strong>{currentQuestion.choices[currentQuestion.answer]}</strong>
                </p>
              )}
              <button onClick={handleNext} className="button button--secondary button--sm" style={{ marginTop: '0.5rem' }}>
                {current + 1 === questions.length ? 'Ver resultados' : 'Siguiente pregunta'}
              </button>
            </div>
          )}
        </>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h3>🎉 Quiz finalizado</h3>
          <p>
            Obtuviste <strong>{score}</strong> de <strong>{questions.length}</strong> respuestas correctas.
          </p>
          <button onClick={handleRestart} className="button button--primary button--sm" style={{ marginTop: '1rem' }}>
            Intentar de nuevo
          </button>
        </div>
      )}
    </div>
  );
}
