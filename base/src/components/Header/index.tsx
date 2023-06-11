import './styles.css'
//import Logo from '../../assets/logo.svg'
//import ArrowBack from '../../assets/back.svg'
import {useNavigate} from 'react-router-dom'

type Props = {
  showBack?: boolean;
}


function Header({showBack}:Props){
  const navigate= useNavigate();
  return(
    <header>
      {
        showBack && 
        <img 
          src = '' 
          alt="Voltar" 
          className='arrow-back'
          onClick={()=>navigate(-1)}
        />
      }
   
      <img src ='' alt="Logo"/>
    </header>
  )
}

export default Header;