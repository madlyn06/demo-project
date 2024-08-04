import axios from 'axios'
export const REACT_APP_BASE_URL = 'https://bekhoebengoan.id.vn'
export const REACT_APP_ACCESS_TOKEN =
  '645cc95de7af7d742bf427cc58f8d4f01b8a894dafdb1b981aeb3b1293bff67898d96ce7e4796fef7d20780537a8a0d1b66b67034565fb7f5644446194f9026689f9294261312f37558d6632c05ae5530387eaa140934ad954725a235c4add071def79f88583773ccd9b597f7d5dcfa3d48195b628dd80169fe5eb148d9ac018'
export const API = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${REACT_APP_ACCESS_TOKEN}`
  }
})
