import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from "./services/login"
import signupService from "./services/signup"
import Alert from './components/alert'
import "./App.css"

import Navbar from './components/navbar'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const [goodMessage, setGoodMessage] = useState(null)
  const noteFormRef = React.createRef()


  const handleLogin = async (credencials, setUsername, setPassword) => {
    try {
      const autentication = await loginService.login(credencials)
      console.log(autentication)
      setUsername("")
      setPassword("")
      setGoodMessage("Successful Login")
      setTimeout(() => {
        setGoodMessage(null)
      }, 5000)
      setUser(autentication)
      window.localStorage.setItem('credencials', JSON.stringify(autentication))
    } catch (error) {
      console.error(error.response.data.error)
      setErrorMessage(error.response.data.error)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)

    }
  }

  const handleSignUp = async (credencials, setUsername, setPassword) => {
    try {
      const autentication = await signupService.signup(credencials)
      console.log(autentication)
      setUsername("")
      setPassword("")
      setGoodMessage("Sign up success!")
      setUser(autentication)
      window.localStorage.setItem('credencials', JSON.stringify(autentication))
    } catch (error) {
      console.log(error.response.data.error)
      setErrorMessage(error.response.data.error)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleNewBlog = async (credencials, setUrl, setAuthor, setTitle) => {
    try {
      noteFormRef.current.setVisible(false)
      const SavedBlog = await blogService.newBlog(credencials, user.token)
      console.dir(SavedBlog)
      setUrl("")
      setAuthor("")
      setTitle("")
      setGoodMessage(`New Blog: ${SavedBlog.data.title} - ${SavedBlog.data.author}`)
      setTimeout(() => {
        setGoodMessage(null)
      }, 5000)
      const aux =await blogService.getAll() 
      setBlogs(
        aux.sort((blog1, blog2) => {
          if (blog1.likes < blog2.likes) return 1
          if (blog1.likes > blog2.likes) return -1
          return 0
        })
      )
    } catch (error) {
      setErrorMessage(error.response.data.error)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }

  }

  const handleEditBlog = async (blog) => {
    try {
      await blogService.editBlog(blog)
      setGoodMessage(`Liked!`)
      setTimeout(() => {
        setGoodMessage(null)
      }, 5000)
      const aux =await blogService.getAll() 
      setBlogs(
        aux.sort((blog1, blog2) => {
          if (blog1.likes < blog2.likes) return 1
          if (blog1.likes > blog2.likes) return -1
          return 0
        })
      )
    }
    catch (error) {
      setErrorMessage(error.response.data.error)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleDeleteBlog = async (blog) => {
    try {
      await blogService.deleteBlog(blog, user.token)
      setErrorMessage(`Deleted!`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      blogService.getAll().then(blogs =>
        setBlogs(blogs)
      )
    }
    catch (error) {
      setErrorMessage(error.response.data.error)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  useEffect(() => {
    blogService.getAll()
      .then(blogs => setBlogs(
        blogs.sort((blog1, blog2) => {
          if (blog1.likes < blog2.likes) return 1
          if (blog1.likes > blog2.likes) return -1
          return 0
        })
      )
      )
    const JSONuser = window.localStorage.getItem('credencials')
    if (JSONuser) setUser(JSON.parse(JSONuser))

  }, [])


  return (
    <div className="wrapper">
      <Navbar
        handleLogin={handleLogin}
        handleNewBlog={handleNewBlog}
        handleSignUp={handleSignUp}
        setUser={setUser}
        noteFormRef={noteFormRef}
        user={user}
      />
      <div className="main">
        <h2 className="Titulo">Blogs</h2>

        {blogs.map(blog =>
          <Blog
            key={blog.id}
            blog={blog}
            handleEditBlog={handleEditBlog}
            handleDeleteBlog={handleDeleteBlog}
            id={user.id} />
        )}
      </div>
      <div className="alertspace">
        {
          user !==null?
          <h3>  {user.username} </h3>
          :
          <span>log in to participate!</span>
        }
        <Alert text={errorMessage} classes="Bad" />
        <Alert text={goodMessage} classes="Good" />
      </div>
    </div>
  )
}

export default App