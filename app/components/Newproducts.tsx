import React from 'react'
import ProductCard from './ProductCard'

const Newproducts = () => {
    const productsdata = [
        {
            img: "/partywear.jpg",
            title: "Party Wear",
            desc: "Gorgeous Party Wear",
            rating: 3,
            price: "260.00",
        },
        {
            img: "/partypink.jpg",
            title: "Pink Gown",
            desc: "Stylish Pink Gown",
            rating: 5,
            price: "60.00",
        },
       
        {
            img: "/floralwear.jpg",
            title: "Casual Wear",
            desc: "Casual Floral Wear",
            rating: 3,
            price: "40.00",
        },
       
        {
            img: "/casualwear.jpg",
            title: "Casual Top",
            desc: "Casual Office Wear",
            rating: 4,
            price: "50.00",
        },
       
        {
            img: "/skirt.jpg",
            title: "Skirt",
            desc: "White Elegant Skirt",
            rating: 4,
            price: "20.00",
        },
         {
            img: "/frock.jpg",
            title: "Frock",
            desc: "Blue Fairy Gown",
            rating: 5,
            price: "100.00",
        },
        {
            img: "/necklace.jpg",
            title: "Necklace",
            desc: "Classy Necklace set",
            rating: 4,
            price: "25.00",
        },
        {
            img: "/earrings.jpg",
            title: "Earring",
            desc: " Elegant Earring with Trendy look",
            rating: 3,
            price: "15.00",
        },
         
    ]
  return (
      <div>
          <div className='container pt-16'>
              <h2 className='font-medium text-2xl pb-4'>New Products</h2>
              <div className='grid grid-cols-1 place-items-center sm:place-items-start 
              sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                  {
                      productsdata.map((data, index) => (<ProductCard
                          key={index}
                          img={data.img}
                          title={data.title}
                          desc={data.desc}
                          rating={data.rating}
                          price={data.price}
                      />))
                  }
              </div>
          </div>
    </div>
  )
}

export default Newproducts