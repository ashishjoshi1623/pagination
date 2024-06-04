import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'; 

function App() {
  const [data,setData] = useState([]);
  const getProducts = async() => {
    try {
      const response = await axios.get('https://dummyjson.com/products?limit=12');
      const products = response.data.products;
      setData(products);
    } catch (error) {
      console.log("get product error: ", error);
    }
  }

  useEffect(()=>{
    getProducts();
  },[])

  return (
    <>
    <div className='container'>
    <ul className='products'>
      {data.map((item) => {
        return(
          
            <li key={item.id}><img height='200px' width='200px' src={item.images} alt="image" /> <p>{item.title}</p></li>
          
        )
      })}
      </ul>
      </div>
    </>
  )
}

export default App
