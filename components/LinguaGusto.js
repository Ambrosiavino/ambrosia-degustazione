const gusti = ['Dolce', 'Acido', 'Amaro'];

export default function LinguaGusto({ onSeleziona, onContinua }) {
  return (
    <div>
      <h2>Assaggia il vino</h2>
      <p>Concentrati sulle zone della lingua che pizzicano di più!</p>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
        {gusti.map((gusto) => (
          <button key={gusto} onClick={() => onSeleziona(gusto)}>{gusto}</button>
        ))}
      </div>
      <button style={{ marginTop: 20 }} onClick={onContinua}>Scopri il profilo</button>
    </div>
  );
}
