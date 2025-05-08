
const gusti = ['Dolce', 'Acido', 'Amaro'];

export default function LinguaGusto({ onSeleziona, onContinua }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      background: '#f6f1ea',
      borderRadius: '1rem',
      fontFamily: 'Georgia, serif',
    }}>
      <img
        src="/dioniso.png"
        alt="Dioniso"
        style={{ width: '160px', marginRight: '2rem', borderRadius: '1rem' }}
      />
      <div>
        <h2>Assaggia il vino</h2>
        <p>Concentrati sulle zone della lingua che pizzicano di più!</p>
        <div style={{ display: 'flex', gap: 10, margin: '1rem 0' }}>
          {gusti.map((gusto) => (
            <button key={gusto} onClick={() => onSeleziona(gusto)}>{gusto}</button>
          ))}
        </div>
        <button onClick={onContinua}>Scopri il profilo</button>
      </div>
    </div>
  );
}
