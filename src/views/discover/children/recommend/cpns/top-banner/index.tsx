import React, {
  memo,
  useCallback,
  useState,
  useRef,
  ElementRef,
  useEffect
} from 'react'
import { Carousel } from 'antd'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'
import { useAppSelector, appShallowEqual } from '@/hooks'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const TopBanner: FC<IProps> = () => {
  // 记录当前轮播到的图片,动态设置背景图片
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    appShallowEqual
  )

  const bannerChange = useCallback((from: any) => {
    setTimeout(() => {
      setCurrentIndex(from)
    }, 0)
  }, [])

  // 获取背景图片
  const [bgImage, setImage] = useState<string>('')
  useEffect(() => {
    if (banners[currentIndex]) {
      setImage(banners[currentIndex].imageUrl + '?imageView&blur=40x20')
    }
  }, [banners, currentIndex])

  return (
    <BannerWrapper
      style={{
        background: `url(${bgImage}) center center/6000px`
      }}
    >
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
            onClick={() => bannerRef.current?.prev()}
          ></button>
          <button
            className="btn right"
            onClick={() => bannerRef.current?.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
