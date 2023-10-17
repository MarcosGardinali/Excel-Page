import Cabecalho from "./Componentes/Cabecalho";
import Conteudo from "./Componentes/Conteudo";
import { Analytics } from '@vercel/analytics/react';
import Rodape from "./Componentes/Rodape";

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Conteudo />
      <Rodape />
      <Analytics />
    </div>
  );
}

export default App;
