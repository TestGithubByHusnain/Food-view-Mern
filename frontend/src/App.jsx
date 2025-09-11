import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import BottomNav from './components/BottomNav'

function App() {
  return (
    <>
  <AppRoutes />
  <BottomNav />
    </>
  )
}

export default App
