import React from "react"
import Logout from './logout'
import NewBlog from './NewBlog'
import Togglable from './toggable'
import Login from "./login"



export default function Navbar ({handleLogin,handleNewBlog,handleSignUp,setUser,noteFormRef,user}){

    return(
        <div className="navbar">
        {
          user === "" ?
            <>
              <div className="navbar-item">
                <Togglable text="Login" >
                  <Login
                    handleButton={handleLogin}
                    text="Login"
                  />
                </Togglable>
              </div>

              <div className="navbar-item">
                <Togglable text="Sign up" >
                  <Login
                    handleButton={handleSignUp}
                    text="Sign Up"
                  />
                </Togglable>
              </div>
            </>
            :
            <>
              <div className="navbar-item">
                <Logout setUser={setUser} />
              </div>
              <div>
                <Togglable text="New Blog"  ref={noteFormRef}>
                  <NewBlog
                    handleButton={handleNewBlog} />
                </Togglable>
              </div>
            </>
        }
      </div>
    )

}