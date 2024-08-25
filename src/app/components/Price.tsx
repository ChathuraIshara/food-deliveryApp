'use client'
import React, { useEffect } from "react";
import { useState } from "react";

type props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

function Price({ price, id, options }: props) {
    const [totalPrice,setTotalPrice]=useState(price);
    const [quantity,setQuantity]=useState(1);
    const [selected,setSelected]=useState(0);

    useEffect(()=>
    {
        setTotalPrice(
            quantity*(options? price+options[selected].additionalPrice:price)

        );

    },[quantity,options,price,selected])


  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-red-500 font-bold text-2xl">${totalPrice.toFixed(2)}</h2>
      {/*options container*/}
      <div className="flex flex-row items-center gap-8">
        {options?.map((option,index) => (
          <button
            className="min-w-[6rem] bg-white text-red-500 ring-1 ring-red-300 rounded-md px-4 py-2"
            style={{backgroundColor:selected===index?'rgb(248 113 113)':'white',
                color:selected===index?'white':'rgb(248 113 113)'
            }}
            key={option.title}
            onClick={()=>{setSelected(index)}}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/*quantity and addbutton container*/}
      <div className="flex flex-row justify-between items-center">
        <div className="flex justify-between w-full p-3 ring-2 ring-red-300 text-red-500">
          <span>Quantity</span>
          <div className="flex items-center gap-4 text-red-500">
            <button className="" onClick={()=>{setQuantity((prev)=>(prev>1?prev-1:1))}}>{"<"}</button>
            <span className="">{quantity}</span>
            <button className="" onClick={()=>{setQuantity((prev)=>(prev<9?prev+1:9))}}>{">"}</button>
          </div>
        </div>
        <button className="bg-red-500 ring-2 ring-red-300 uppercase text-white  p-3 w-56">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Price;
