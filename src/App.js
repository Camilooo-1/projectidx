import { useState } from 'react';
import argentina from './imagenes/argentina.png';
import bolivia from './imagenes/bolivia.png';
import chile from './imagenes/chile.png';
import colombia from './imagenes/colombia.png';


function App() {
  const banderas = [argentina, bolivia, chile, colombia];
  const [nroBandera, setNroBandera] = useState(0)

  function banderaSiguiente() {
    if (nroBandera < banderas.length - 1) {
      setNroBandera(nroBandera + 1)
    }
  }

  function banderaPrevia() {
    if (nroBandera > 0) {
      setNroBandera(nroBandera - 1)
    }
  }

  return (
    <div>
      <h1>Banderas de paises Latinoamericanos</h1>
      <h3>Hender Camilo Sepulveda</h3>
      <h3>Juan Camilo Ortega</h3>
      <h3>Sergio Andres Arenas</h3>
      <p><img src={banderas[nroBandera]} alt="colombia" /></p>
      <p>
        <input type="button" value="<" onClick={banderaPrevia} />
        <input type="button" value=">" onClick={banderaSiguiente} />
      </p>
    </div>
  );
}

export default App;