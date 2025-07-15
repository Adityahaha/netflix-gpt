import React from 'react'
import Login  from './login'
import Browse from './Browse'
import Rou

const Body = () => {
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Body />
        },
        {
            path:"/browse",
            element:<Browse />
        },
    ])

  return (
    <div>
        <Login />
        <Browse />
    </div>
  )
}

export default Body