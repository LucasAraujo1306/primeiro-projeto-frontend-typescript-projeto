import './styles.css'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { FormEvent, useState } from 'react';


function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function handleSubmit(event:FormEvent){
    event.preventDefault();

    try {
      if(!email || !password){
        throw new Error ('Preencha todos os campos');
      }
      const response = await api.post('/login', {
        email,
        password
      })
      console.log(response );
    } catch (error) {
      console.log(error);
      
    }
  }

  return(
    <div className='container container-sign-in'>
      <div className='sign-in'>
      <img src='' alt="logo" />

      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='E-mail' 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
        />
        <input 
        type="password" 
        placeholder='Senha' 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        required
        />
  
        <span>Não tem cadastro ? 
          <Link to="/signup">Clique aqui!</Link>
        </span>

        <button className='btn-pink'>Login</button>
      </form>
      </div>
    </div>
  )
}

export default SignIn