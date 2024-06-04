import React from 'react'
import {useSelector} from 'react-redux'

const UserHome = () => {
  const user = useSelector((state)=>state.user.userData.name)
  console.log('user=',user)
  return (
    <div className="container bg-no-repeat bg-cover flex justify-center" >
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">
        Welcome to Your Dashboard {user}
      </h1>
      <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
        <p className="text-lg text-gray-700 mb-4">
          Hello {user}
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md focus:outline-none focus:ring focus:border-blue-300">
          Explore Dashboard
        </button>
      </div>
    </div>
  </div>    
  
  )
}

export default UserHome
