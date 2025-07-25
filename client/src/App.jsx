import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './pages/User/Layout'
import Dashboard from './pages/User/Dashboard'
import Comments from './pages/User/Comments'
import ListBlog from './pages/User/ListBlog'
import PublishBlog from './pages/User/PublishBlog'
import Login from './components/user/Login'
import 'quill/dist/quill.snow.css'
import { Toaster } from 'react-hot-toast'
import { useAppContext } from './context/AppContext'
const App = () => {
  const {token} = useAppContext() ;
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/blog/:id' element= {<Blog />} />
        <Route path='/user' element={token ?  <Layout/> : <Login />} >
          <Route index element = {<Dashboard />} />
          <Route path='publishBlog' element = {<PublishBlog />} />
          <Route path='listBlog' element = {<ListBlog />} />
          <Route path='comments' element = {<Comments />} />
      </Route>
      </Routes>
    </div>
  )
}

export default App
