import React,{ useState } from 'react'
import ProductRegistration from './ProductRegistration.jsx'
import ProductList from './ProductList.jsx'

function App() 
{
  /*--- creating a state variable of array type to store the products ----*/
  const [products,setProducts] = useState([])   //empty array of products

  /*--- defining a function to update the state variable ----*/
  function addProducts(product)
  {
    //inserting new item in products state variable
    setProducts([...products,product])
  }

  /*--- UI designing ---*/
  return (
            <div>
                {/*--- Product Registration Component ---*/}
                <ProductRegistration addProducts = {addProducts} />
                {/*---- Product List Component ----*/}
                <ProductList productlist = {products} />
            </div>
    )
}

export default App
