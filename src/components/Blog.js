import React, { useState } from 'react'
const Blog = ({ blog, handleEditBlog, handleDeleteBlog,id }) => {
  const [visible, setVisible] = useState(false)
  const deleteblog = async () => {
    if (window.confirm("are you sure?"))handleDeleteBlog(blog)
  }
  return (
    < div className="blog " >
      {
        visible ?
          <div className="Blog-body">
            <div >
              <div className="Blog-row">
                { id===blog.user&&
                  <button onClick={()=>{deleteblog()}}>
                  delete
                </button>
                }
                <button onClick={() => {
                  handleEditBlog(
                    { ...blog, likes: blog.likes + 1 })
                }}>
                  like
                  </button>
                <button onClick={() => { setVisible(!visible) }} >
                  hide
                  </button>
              </div>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <th>
                        Title
                    </th>
                      <td>
                        {blog.title}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Url
                    </th>
                      <td>
                        {blog.url}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Likes:
                    </th>
                      <td>
                        {blog.likes}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Author:
                    </th>
                      <td>
                        {blog.author}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
          :
          <>
            <div >
              <div className="head">
                <div><span>{blog.title}</span>
                </div>
                <div>
                  <button onClick={() => { setVisible(!visible) }} >
                    show
                </button>
                </div>
              </div>
            </div>
          </>
      }

    </div >
  )
}

export default Blog
