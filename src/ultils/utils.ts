import { REACT_APP_BASE_URL } from './api'

export const convertImg = (data: any) => {
  let url = ''
  if (data?.data) {
    if (data.data.attributes.formats.large.url) {
      url = data.data.attributes.formats.large.url
    } else if (data.data.attributes.formats.medium.url) {
      url = data.data.attributes.formats.medium.url
    } else if (data.data.attributes.formats.small.url) {
      url = data.data.attributes.formats.small.url
    } else {
      url = data.data.attributes.formats.thumbnail.url
    }
  }
  return `${REACT_APP_BASE_URL}${url}`
}
