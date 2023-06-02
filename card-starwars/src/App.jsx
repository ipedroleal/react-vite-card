import Card from "./components/Card"
import swposterImg from "./assets/sw.jpg";
import esbposterImg from "./assets/esb.jpg";
import rotjposterImg from "./assets/rotj.jpg";

function App () {
  return(
    <div className="app">
      <Card title="Pôster: Star Wars (1997) " postImg={swposterImg}
            SubTitle="Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos.
            Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar.
            Não perca a chance de adicionar essa linda memória ao seu acervo!"
         />
      <Card title="Pôster: Empire Stikes Back (1980) " postImg={esbposterImg}
      SubTitle="Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos.
      Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar.
      Não perca a chance de adicionar essa linda memória ao seu acervo!"
      />
      <Card title="Pôster: Return of the Jedi (1983) " postImg={rotjposterImg}
      SubTitle="Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos.
      Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar.
      Não perca a chance de adicionar essa linda memória ao seu acervo!"
      />
    </div>
  )
}

function App () {
  return(
    <div className="app">
      <Card/>
    </div>
  )
}

