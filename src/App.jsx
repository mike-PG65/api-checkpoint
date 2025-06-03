import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [users, setUsers] = useState([])
  const [error, setError] = useState('')

  useEffect(()=>{
    const fetchUsers = async()=>{

      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      if(!response){
        setError("Something went weong fetching the users!!")
        return;
      }

      const data= response.data

      setUsers(data)
  }

  fetchUsers()
  }, [])
  return (
    <div className='flex flex-col w-screen'>

      <h1 className='mb-4 text-center text-xl font-semibold'>Users list</h1>

      <table>
        <thead className='mb-4'>
    <tr>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
    </tr>
  </thead>
        <tbody>
          {
          users.map((user)=>(
            <tr key={user.id}  className={ `text-center mb-3 ${user.id % 2 === 0 ? "bg-gray-300": "bg-white" }`}>
              <td className='py-3'>{user.name}</td>
              <td className='py-3'>{user.username}</td>
              <td className='py-3'>{user.email}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
      
    </div>
  )
}

export default App
