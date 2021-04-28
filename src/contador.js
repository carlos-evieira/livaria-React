import {useState} from "react"

function Contador() {
  const [contador, setContagem] = useState(10)
  function add(){
    console.log("adicionando 1 número")
    setContagem(contador + 1)
  }
  function remove(){
    console.log("removendo 1 número")
    setContagem(contador - 1)
  }
  return ( 
    <div className="App">
      <p>contagem {contador}</p>
      <button onClick={add}>Adicionar 1</button>
      <button onClick={remove}>Subtrair 1</button>
      <p>contagem {contador}</p>
    </div>
  )
}

export default App;
