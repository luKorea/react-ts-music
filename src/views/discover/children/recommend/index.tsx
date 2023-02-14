import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import TopBanner from './cpns/top-banner'
import { fetchBannerData } from '@/store/modules/discover/recommend'
import { useAppDispatch } from '@/hooks'
import { RecommendWraper } from './style'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // 获取轮播图数据
    dispatch(fetchBannerData())
  }, [dispatch])
  return (
    <RecommendWraper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </RecommendWraper>
  )
}

export default memo(Recommend)
