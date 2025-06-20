import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import AdminDashboard from '../Pages/AdminDashboard'
import ArticlePage from "../Pages/CustomPages/ArticlePage"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="aboutus" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="articles" element={<ArticlePage />} />
      <Route path="admin" element={<AdminDashboard />} />
    </Routes>
  )
}

export default AppRoutes
