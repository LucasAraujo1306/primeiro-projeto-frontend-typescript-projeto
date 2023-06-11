import { Route, Routes } from "react-router-dom"
import Main from './pages/Main'
import SignIn from "./pages/SignIn";

function MainRountes(){
  return (
    <Routes>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/main' element={<Main/>}/>
    </Routes>
  )
}

export default MainRountes;