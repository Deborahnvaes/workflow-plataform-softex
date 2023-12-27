import React from 'react'
import { Routes } from 'react-router-dom'

export const Login = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LoginForm> />} />
            <Route path="perdeu" element={<LoginPassWordLost> />} />
            


        </Routes>
    </div>
  )
}
