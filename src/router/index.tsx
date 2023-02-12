import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
const Discover = lazy(() => import('@/views/discover'))
// 推荐
const RecommendChildren = lazy(
  () => import('@/views/discover/children/recommend')
)
// 新碟上架
const AlbumChildren = lazy(() => import('@/views/discover/children/album'))
// 歌手
const ArtistChildren = lazy(() => import('@/views/discover/children/artist'))
// 主播电台
const DjradioChildren = lazy(() => import('@/views/discover/children/djradio'))
// 歌单
const PlaylistChildren = lazy(
  () => import('@/views/discover/children/playlist')
)
// 推荐榜
const ToplistChildren = lazy(() => import('@/views/discover/children/toplist'))

const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))
const Mine = lazy(() => import('@/views/mine'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <RecommendChildren />
      },
      {
        path: '/discover/album',
        element: <AlbumChildren />
      },
      {
        path: '/discover/playlist',
        element: <PlaylistChildren />
      },
      {
        path: '/discover/artist',
        element: <ArtistChildren />
      },
      {
        path: '/discover/djradio',
        element: <DjradioChildren />
      },
      {
        path: '/discover/toplist',
        element: <ToplistChildren />
      }
    ]
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  }
]

export default routes
