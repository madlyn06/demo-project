import React, { useEffect, useState } from 'react'
import { API } from 'src/ultils/api'

function useStripe<T>(url: string) {
  const [data, setData] = useState({})

  useEffect(() => {
    callApi()
  }, [])
  const callApi = async () => {
    const result = await API.get(url)
    if (result.data) {
      setData(result.data.data.attributes)
    }
  }
  return data as T
}

export default useStripe
