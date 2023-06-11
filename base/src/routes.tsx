import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import Main from './pages/Main'
import SignIn from "./pages/SignIn";
import useAuth from "./hooks/useAuth";
import TeacherDetalhar from "./pages/TeacherDetalhado";

type Props = {
  redirectTo:string
}

function ProtectedRoutes({redirectTo}:Props){
  const {handleGetToken} = useAuth()

  return handleGetToken() ? <Outlet/> : <Navigate to = {redirectTo}/>
}

function MainRountes(){
  return (
    <Routes>
      <Route path='/login' element={<SignIn/>}/>

      <Route element={<ProtectedRoutes redirectTo='/login'/>}>
      <Route path='/main' element={<Main/>}/>
      <Route path='/detalhar-professor' element={<TeacherDetalhar/>} />
      </Route>
    </Routes>
  )
}

export default MainRountes;