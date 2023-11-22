"use client";
import Image from "next/image";
import iamges from "../../../../public/assets/images/branner/productsBanner1.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { GetDataCart } from "@/utils/addToCart/AddToCart";
import { useContext, useEffect, useState } from "react";
import { getFromCart } from "@/utils/api/user";
import AllStateContext from "@/context/AllStateContext";

const CartItems = () => {
  const [getCartItems, setCartItems] = useState([1,2]);

  const { FindUser } = useContext(AllStateContext);

  
  

  useEffect(() => {
    (async () => {
      const getCart = await getFromCart(FindUser?._id);
      console.log("🚀 ~ file: CartItems.jsx:24 ~ getCart:", getCart)
      // setCartItems(getCart);
    })();
  }, []);
  return (
    <>
      {getCartItems?.map((item, index) => (
        <div className="flex items-center gap-3">
          <button className="text-xl">
            <AiOutlineClose className="text-sm font-semibold dark:text-dark-100" />
          </button>
          <div className="flex h-24 w-26">
            <Image
              src={iamges}
              width={300}
              height={200}
              alt=""
              className="object-cover w-full"
            />
          </div>
          <div className="w-1/2 space-y-3">
            <p className="line-clamp-1">
              Temprador WooCommerce Landing Page Theme
            </p>
            <p className="dark:text-dark-100">Imagineco</p>
            <p className="font-semibold dark:text-dark-100">
              <span className="px-2 py-1 dark:bg-dark-200 rounded-3xl text-primarySec ">
                {"59.00"}
              </span>{" "}
              X {"1"}
            </p>
          </div>
        </div>
      ))}

      {/* sub total */}
      <div className="absolute right-0 w-full h-32 space-y-8 bottom-8">
        <div className="border-t border-dark-200"></div>
        <p className="flex justify-between w-[90%] mx-auto">
          Subtotal <span>$ 100</span>
        </p>
        <div className="w-[90%] mx-auto py-3 bg-primary text-center rounded">
          {" "}
          <button>Proceed to checkout</button>
        </div>
      </div>
    </>
  );
};

export default CartItems;
