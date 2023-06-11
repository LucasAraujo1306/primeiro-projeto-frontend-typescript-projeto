import Avatar from '../../components/Avatar'
import Header from '../../components/Header'
import useTeacherDetail from '../../hooks/useTeacherDetail'
import './styles.css'

function TeacherDetalhar(){
  const {currentTeacherDetail}= useTeacherDetail()
  

  return(
    <div>
      <Header showBack/>

      <div className='detalhar-professor'>
        <Avatar image={currentTeacherDetail?.avatar || ''}/>
        <h1>{currentTeacherDetail?.nome}</h1>
        <span>{currentTeacherDetail?.stack}</span>
        <div className='horizontal-line line'></div>
        <h3>Bio</h3>
        <p>
          {currentTeacherDetail?.bio}
        </p>
      </div>
    </div>
  )
}

export default TeacherDetalhar