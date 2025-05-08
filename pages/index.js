import { useState } from 'react';
import DionisoIntro from '../components/DionisoIntro';
import GiocoDegustazione from '../components/GiocoDegustazione';

export default function Home() {
  const [fase, setFase] = useState('intro');
  const [scelte, setScelte] = useState({ aromi: [], gusti: [] });

  return (
    <div>
      {fase === 'intro' && <DionisoIntro onAvviaGioco={() => setFase('gioco')} />}
      {fase === 'gioco' && <GiocoDegustazione scelte={scelte} setScelte={setScelte} />}
    </div>
  );
}
