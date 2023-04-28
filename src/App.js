import React,{ useState} from 'react';

function App() {

  //let credito = 155;
  const [ credito, setcredito ] = useState(155)

  function adicionacredito(){
      setcredito( credito +  1000); 
    
  }

   function comprapassagem(preco){

        if(credito < preco){
            alert("Crédito insuficiente!")
            return
        }
  

        alert("Passagem comprada com sucesso!")
        setcredito( credito - preco)
   }

  return (
    <div>

        <h1> Grazy Passagens </h1>
        <p> Conheça o Mundo pelo melhor preço! </p>
        
        <button onClick= {()=>adicionacredito()} > Adicionar Crédito </button>

        <p> Seu crédito é de R$ <strong> { credito } </strong> </p>

        <h2> Viagens </h2>
        <p> California- R$ 1200 <button onClick= {()=>comprapassagem(1200)}> Comprar </button></p>
        <p> Londres - R$ 1420 <button onClick= {()=>comprapassagem(1420)}> Comprar </button></p>
        <p> França - R$ 1700 <button onClick= {()=>comprapassagem(1420)}> Comprar </button></p>

    </div>
  );
}

export default App; 
