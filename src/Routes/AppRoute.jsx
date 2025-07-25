import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import {Route , Routes} from 'react-router-dom'
import Home from '../pages/Home'
import ToyBaby from '../pages/ToyBaby'
import Gift from '../pages/Gift'
import Gadget from '../pages/Gadget'
import Contact from '../pages/Contact'
import Collections from '../pages/Collections'
import HomeDecore from '../pages/HomeDecore'



function AppRoute() {
  return (
     <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="toyBaby" element={<ToyBaby />} />
        <Route path="homeDecore" element={<HomeDecore />} />
        <Route path="gifts" element={<Gift />} />
        <Route path="gadgets" element={<Gadget />} />
        <Route path="collections" element={<Collections />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default AppRoute
