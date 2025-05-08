const aromi = ['Fruttati', 'Floreali', 'Speziati', 'Erbacei', 'Terrosi', 'Vegetali'];

export default function RuotaAromi({ onSeleziona, onContinua }) {
  return (
    <div>
      <h2>Annusa il vino</h2>
      <p>Inizia dal centro della ruota, esploratore!</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
        {aromi.map((aroma) => (
          <button key={aroma} onClick={() => onSeleziona(aroma)}>{aroma}</button>
        ))}
      </div>
      <button style={{ marginTop: 20 }} onClick={onContinua}>Continua</button>
    </div>
  );
}
