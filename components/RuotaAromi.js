
const aromi = ['Fruttati', 'Floreali', 'Speziati', 'Erbacei', 'Terrosi', 'Vegetali'];

export default function RuotaAromi({ onSeleziona, onContinua }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      background: '#fffdf5',
      borderRadius: '1rem',
      fontFamily: 'Georgia, serif',
    }}>
      <img
        src="/dioniso.png"
        alt="Dioniso"
        style={{ width: '160px', marginRight: '2rem', borderRadius: '1rem' }}
      />
      <div>
        <h2>Annusa il vino</h2>
        <p>Inizia dal centro della ruota, esploratore!</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, margin: '1rem 0' }}>
          {aromi.map((aroma) => (
            <button key={aroma} onClick={() => onSeleziona(aroma)}>{aroma}</button>
          ))}
        </div>
        <button onClick={onContinua}>Continua</button>
      </div>
    </div>
  );
}
