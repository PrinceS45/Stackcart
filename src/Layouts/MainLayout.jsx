import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AppRoute from '../Routes/AppRoute'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-grow relative z-10">
        <Outlet/>
      </main>
      <Footer/>     
    </div>
  )
}

export default MainLayout