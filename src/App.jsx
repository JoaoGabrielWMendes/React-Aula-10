import React, { useState } from 'react';
import { TodoList } from './components/TodoList'

function App() {
  const[isLogged, setIsLogged] = useState(false);
  {/*isLogged é o elemento 0*/}
  {/*setIsLoggedfunção que permite trocar o valor do isLogged. Precisa da função pq o isLogged é uma const*/}

  const doLogin = () => setIsLogged(true);
  const doLogout = () =>setIsLogged(false);

  return (
    <>
    
    {isLogged ? <div>Seja bem vindo, Fulando de tal! <a href="#" onClick={doLogout}>Clique aqui para deslogar</a> <TodoList /> </div> : <div>Faça seu login, <a href="#" onClick={doLogin}>Clique aqui!</a></div>} 
    {/* Operador ternário para fazer o if */} 
    
    </>
  
   )
}

export default App
