import React, { memo, useEffect, useCallback, useState, useRef } from 'react'
import { Carousel } from 'antd'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'
import { fetchBannerData } from '@/store/modules/discover/recommend'
import { useAppSelector, useAppDispatch, appShallowEqual } from '@/hooks'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const TopBanner: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<any>()
  const dispatch = useAppDispatch()
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    appShallowEqual
  )

  useEffect(() => {
    dispatch(fetchBannerData())
  }, [dispatch])

  const bannerChange = useCallback((from: any) => {
    setTimeout(() => {
      setCurrentIndex(from)
    }, 0)
  }, [])

  const bgImage =
    banners[currentIndex] &&
    banners[currentIndex].imageUrl + '?imageView&blur=40x20'

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            effect="fade"
            beforeChange={bannerChange}
            ref={bannerRef}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl className="control">
          <button
            className="btn left"
            onClick={() => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={() => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
