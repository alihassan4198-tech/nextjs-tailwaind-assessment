import axios from 'axios'

export const fetchData = async () => {
  return await axios
    .get('https://dummyjson.com/products?limit=10&skip=0')
    .then((res) => {
      return res.data.products
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
      throw error
    })
}
