import axios from 'axios'
export const REACT_APP_BASE_URL = 'https://bekhoebengoan.id.vn'
export const REACT_APP_ACCESS_TOKEN =
  '2b86a24f2f9c0d459f1ef307388c841df95607208245f5156defb7fdac370192aa8ea09bf352dea4433033a12ded0ebe6309c453de9957e864f5ab2b10a8b339b673b5572cce16663fc4f0905443755bed0a37af397a6eda4b3f3267c30518c68d8e58d8ab19ff91b229e3ad515fb3d8a641f44d3778e859cbeb738d4f7a8a3b'
export const API = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${REACT_APP_ACCESS_TOKEN}`
  }
})
