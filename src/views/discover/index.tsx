import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Discover = () => {
  return (
    <div>
      <div className="nav">导航</div>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default Discover
