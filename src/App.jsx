import { useState } from 'react'
import './App.css'

function App() {
 
const[cep, setCep] = useState('');
const[endereco, setEndereco] = useState(null);

const handleBuscaCep = async(event) =>{


try{
const response = await fetch (`https://viacep.com.br/ws/${cep}/json/`)
if(!response.ok){
  throw new error("Cep não encontrado");
}
setEndereco(await response.json())
}catch(error){
  console.error(error);
}
}



  return (
    <>
    <div className='container'>
      <h1>Busca de endereço</h1>

      <input type="number" 
      placeholder='Digite seu cep'
      value={cep}
      onChange={(e) => setCep(e.target.value)}
      />
      
      <button onClick={handleBuscaCep}>
        Buscar
      </button>
    
    <div className='endereco'> 
    {endereco ? (<>
      <div id='informacoes' >
      <p id='logradouro'>• Logradouro: {endereco.logradouro}</p>
      <p id='bairro'>• Bairro:{endereco.bairro}</p>
      <p id='uf'>• Estado:{endereco.uf}</p>
      <p id='localidade'>• Cidade:{endereco.localidade}</p>
      </div>
    </>):null}

    
    </div>
    </div>
    </>
  )
}

export default App
