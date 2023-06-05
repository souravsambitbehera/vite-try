import React, { useState } from 'react'

const ImageShow = () => {
    const images = [
        {
            img:"/Images/women-shoe-10.png",
            name:"image-1",
            price:4000,
        },
        {
            img:"/Images/women-shoe-11.png",
            name:"image-2",
            price:3000,
            
        },
        {
            img:"/Images/women-shoe-7.png",
            name:"image-3",
            price:3000,
        }
    ]
  return (
    <div>
        {
            images.map(item=> {
                return (
                    <div key={item.name} >
                <img src={item.img} alt={item.name} height="300ppx" width="300px" />
                <p>{item.price}</p>
                </div>
                )
            }
                
                
            )
               
        }
    </div>
  )
}

export default ImageShow