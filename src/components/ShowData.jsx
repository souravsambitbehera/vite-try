import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import CartContext from './CartContext'

const ShowData = () => {
    const[isLoad,setIsLoad] = useState(false)
    const[data,setData] = useState([])
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (val) => {
        addToCart(val);
      };
   
    useEffect(()=>{
        async function fetchData(){
            setIsLoad(true)
            const res = await fetch("https://fakestoreapi.com/products")
            const apidata = await res.json()
            console.log(apidata)
            setData(apidata)
            setIsLoad(false)
        }
        fetchData()
    },[])
    

  return (
    <div className='d-flex'>
        <div className='fetchData'>

       
        {
            isLoad ? (<h2>Data are fetching</h2>):(
                    data.map(item=>
                       <div key={item.id} >
                        <img src={item.image} alt="" width="200px" height="200px" /> <br />
                        <button onClick={()=>{handleAddToCart(item)}}>Add to cart</button>
                       </div>
                        )
            )
                
        }
         </div>
        <div>
            <button>add to cart</button>
        </div>
        
    </div>
  )
}

export default ShowData