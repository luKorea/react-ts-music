import request from '@/service'

export function getTopBanner() {
  return request.get({
    url: '/banner'
  })
}

export function getHotRecommend() {
  return request.get({
    url: '/personalized'
  })
}

export function getNewAlbum(limit: number, offset: number) {
  return request.get({
    url: '/album/new',
    params: {
      limit,
      offset
    }
  })
}

export function getTopList(id: string | number) {
  return request.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export function getArtistList(limit: number, cat: string | number) {
  return request.get({
    url: '/artist/list',
    params: {
      cat,
      limit
    }
  })
}
