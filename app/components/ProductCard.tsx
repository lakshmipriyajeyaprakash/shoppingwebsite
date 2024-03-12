import React from 'react'
import Image from 'next/image'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
interface producttypes{
    img: string,
    title: string,
    desc: string,
    rating: number,
    price: string,
}
const ProductCard: React.FC<producttypes> = ({ img, title, desc, rating, price }) => {
    const generateRating = (rating:Number)=>{
        switch (rating) {
            case 1:
                return (
                    <div className="flex gap-1 text-[20px] text-[#FF9529]">
                        <FaStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar/>
                    </div>
                )
            case 2:
                return (
                    <div className="flex gap-1 text-[20px] text-[#FF9529]">
                        <FaStar />
                        <FaStar />
                        <CiStar />
                        <CiStar />
                        <CiStar/>
                </div>
                )
            case 3:
                return (
                    <div className="flex gap-1 text-[20px] text-[#FF9529]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <CiStar />
                        <CiStar />
                    </div>
                )
                case 4:
                    return (
                        <div className="flex gap-1 text-[20px] text-[#FF9529]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <CiStar />
                        </div>
                )
                case 5:
                    return (
                        <div className="flex gap-1 text-[20px] text-[#FF9529]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                )
            default:
                return null;
        }
    }
  return (
      <div className='border border-gray-200 rounded-l max-w-[400px]'>
          <div>
              <Image className="w-full h-auto"
                  src={img}
                  width={300}
                  height={300}
                  alt={title}
              />
          </div>
          <div className="space-y-2 py-2">
              <h2 className="text-accent font-medium uppercase p-2">{title}</h2>
              <p className="text-gray-500 max-w-[200px] p-2">{desc}</p>
              <div className="p-2">{generateRating(rating)}</div>
              <div className="font-bold flex gap-4 p-2">${price}
                  <del className="text-gray-500 font-normal">${parseInt(price) + 50}.00</del>
              </div>
          </div>
      </div>
  )
}

export default ProductCard