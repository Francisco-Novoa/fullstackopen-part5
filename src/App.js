import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from "./services/login"
import signupService from "./services/signup"
import Login from './components/login'
import Alert from './components/alert'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [usernameSing, setUsernameSing] = useState("")
  const [passwordSing, setPasswordSing] = useState("")
  const [user, setUser] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const [goodMessage,setGoodMessage]=useState(null)


  const handleLogin = async () =>  {
    try {
      const autentication = await loginService.login({ username, password })
      setUser(autentication)
      setUsername("")
      setPassword("")
      setGoodMessage("Login success!")
    } catch (error) {
      setErrorMessage("wrong username or password")
      setTimeout(() => {
        setErrorMessage("")
      }, 5000)

    }
  }

  const handleSignUp = async () => {
    try {
      const autentication = await signupService.signup({ usernameSing, passwordSing })
      setUser(autentication)
      setUsernameSing("")
      setPasswordSing("")
      setGoodMessage("Sign up success!")
    } catch (error) {
      console.dir(error)
      setErrorMessage(error.errors)
      setTimeout(() => {
        setErrorMessage("")
      }, 5000)

    }
  }

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  return (
    <div>
      <h2>blogs</h2>
      {
        user&&
        `${user.username} logged in:`
      }
      <Alert text={errorMessage} classes="Bad" />
      <Alert text={goodMessage} classes="Good" />


      <Login
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleButton={handleLogin}
        text="Login"
      />
      <Login
        username={usernameSing}
        setUsername={setUsernameSing}
        password={passwordSing}
        setPassword={setPasswordSing}
        handleButton={handleSignUp}
        text="Sign Up"
      />

      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App