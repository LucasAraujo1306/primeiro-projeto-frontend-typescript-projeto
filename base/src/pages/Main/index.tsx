import './styles.css';
import Header from '../../components/Header';
import TeacherCard from '../../components/TeacherCard';
import api from '../../services/api'
import { useEffect, useState } from 'react';
import Teacher from '../../types/Teacher';

function Main() {

  const [allTeachers, setAllTeachers] = useState<Teacher[]>([])

  async function getAllTeachers(){
    try {
      const response = await api.get('/teachers');

      setAllTeachers([...response.data]);
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    getAllTeachers();
  },[])

  return (
    <div className='container'>
      <Header/>

      <div className='main-teachers'>
        {allTeachers.map((teacher)=>(
          <TeacherCard 
            key={teacher.id}
            teacher={teacher}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
