import React, { Suspense, memo } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { DiscoverWrapper, TopMenu } from './style'

import { dicoverMenu } from '@/service/api/local-data'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </TopMenu>
      </div>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </DiscoverWrapper>
  )
}

export default memo(Discover)
