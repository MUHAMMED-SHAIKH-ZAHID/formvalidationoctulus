import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../components/Signup'
import SucessPage from '../components/SucessPage'

const RoutePage = () => {
  return (
    <div>

        <Routes>
            <Route path='/' element={< Signup />} />
            <Route path='/success' element={<SucessPage />} />
        </Routes>
    </div>
  )
}

export default RoutePage