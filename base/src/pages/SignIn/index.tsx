import './styles.css'

import { Link } from 'react-router-dom'

function SignIn(){
  return(
    <div className='container container-sign-in'>
      <div className='sign-in'>
      <img src='' alt="logo" />

      <form>
        <input type="text" placeholder='E-mail' />
        <input type="password" placeholder='Senha' />

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