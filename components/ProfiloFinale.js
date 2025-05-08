export default function ProfiloFinale({ scelte }) {
  return (
    <div>
      <h2>Il tuo profilo aromatico</h2>
      <p>Aromi percepiti: {scelte.aromi.join(', ')}</p>
      <p>Gusti percepiti: {scelte.gusti.join(', ')}</p>
      <p><strong>Bravo esploratore!</strong> Hai rivelato un vino complesso e affascinante.</p>
    </div>
  );
}
