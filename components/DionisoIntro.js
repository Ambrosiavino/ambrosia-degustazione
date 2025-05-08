export default function DionisoIntro({ onAvviaGioco }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      background: '#fff5e6',
      borderRadius: '1rem',
      fontFamily: 'Georgia, serif',
    }}>
      <img
        src="/dioniso.png"
        alt="Dioniso"
        style={{
          width: '180px',
          height: 'auto',
          marginRight: '2rem',
          borderRadius: '1rem',
        }}
      />
      <div>
        <h1 style={{ marginBottom: '0.5rem' }}>Benvenuto esploratore!</h1>
        <p style={{ marginBottom: '1rem' }}>
          Sono Dioniso, ti guiderò alla scoperta di Ambrosia.
        </p>
        <button onClick={onAvviaGioco} style={{ marginRight: '1rem' }}>
          Inizia la degustazione
        </button>
        <button onClick={() => alert('Profilo del vignaiolo in arrivo!')}>
          Scopri il vignaiolo
        </button>
      </div>
    </div>
  );
}
