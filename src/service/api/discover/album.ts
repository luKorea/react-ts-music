import request from '@/service'

export function getHotAlbums() {
  return request.get({
    url: '/album/newest'
  })
}

export function getTopAlbums(limit: number, offset: number) {
  return request.get({
    url: '/album/new',
    params: {
      limit,
      offset
    }
  })
}
