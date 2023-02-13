import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import TopBanner from './cpns/top-banner'
import { fetchBannerData } from '@/store/modules/discover/recommend'
import { useAppDispatch } from '@/hooks'

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
    <div>
      <TopBanner />
    </div>
  )
}

export default memo(Recommend)
