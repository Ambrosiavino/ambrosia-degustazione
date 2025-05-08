
export default function ProfiloFinale({ scelte }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      background: '#fffaf0',
      borderRadius: '1rem',
      fontFamily: 'Georgia, serif',
    }}>
      <img
        src="/dioniso.png"
        alt="Dioniso"
        style={{ width: '160px', marginRight: '2rem', borderRadius: '1rem' }}
      />
      <div>
        <h2>Il tuo profilo aromatico</h2>
        <p>Aromi percepiti: {scelte.aromi.join(', ')}</p>
        <p>Gusti percepiti: {scelte.gusti.join(', ')}</p>
        <p><strong>Bravo esploratore!</strong> Hai rivelato un vino complesso e affascinante.</p>
        <button onClick={() => window.location.href = '/'}>Degusta un altro vino</button>
      </div>
    </div>
  );
}
