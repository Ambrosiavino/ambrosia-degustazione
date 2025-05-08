export default function DionisoIntro({ onAvviaGioco }) {
  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <h1>Benvenuto esploratore!</h1>
      <p>Sono Dioniso, ti guiderò alla scoperta di Ambrosia.</p>
      <button onClick={onAvviaGioco}>Inizia la degustazione</button>
      <button onClick={() => alert('Profilo del vignaiolo in arrivo!')}>Scopri il vignaiolo</button>
    </div>
  );
}
