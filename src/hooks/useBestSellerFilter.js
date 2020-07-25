import { useSelector } from 'react-redux'

/*
    A hook to generate our top 5 bestsellers
*/
const useBestSellerFilter = () => {
    const products = useSelector(state => state.products.products)
    const NUM_PRODUCTS_RETURNED = 4
    
    products.sort((a , b) => {
        if (a.rating > b.rating) {
            return 1;
          }
          if (a.rating < b.rating) {
            return -1;
          }
          return 0;
    })

    return products.slice(products.length - NUM_PRODUCTS_RETURNED)
}

export default useBestSellerFilter