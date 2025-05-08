import { useState } from 'react';
import RuotaAromi from './RuotaAromi';
import LinguaGusto from './LinguaGusto';
import ProfiloFinale from './ProfiloFinale';

export default function GiocoDegustazione({ scelte, setScelte }) {
  const [step, setStep] = useState(1);

  const aggiornaAromi = (aroma) =>
    setScelte((prev) => ({ ...prev, aromi: [...prev.aromi, aroma] }));
  const aggiornaGusti = (gusto) =>
    setScelte((prev) => ({ ...prev, gusti: [...prev.gusti, gusto] }));

  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      {step === 1 && <RuotaAromi onSeleziona={aggiornaAromi} onContinua={() => setStep(2)} />}
      {step === 2 && <LinguaGusto onSeleziona={aggiornaGusti} onContinua={() => setStep(3)} />}
      {step === 3 && <ProfiloFinale scelte={scelte} />}
    </div>
  );
}
