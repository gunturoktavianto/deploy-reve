"use client";

import Image from "next/image";
import React, { useRef, useContext } from "react";
import CartContext from "@/context/CartContext";

export default function ({ product }) {
    const { addItemToCart } = useContext(CartContext);
    const imgRef = useRef(null);

    const setImgPreview = (url) => {
        imgRef.current.src = url;
    };


    const addToCartHandler = () => {
        addItemToCart({
            product: product._id,
            name: product.name,
            price: product.price,
            image: product.images,
        });
    };
    return (
        <div className="bg-white ">
            <div className=" product-detail py-20 flex justify-center mx-auto max-w-[80%]">
                <Image
                    src={
                        product?.images[0]
                            ? product?.images[0].url
                            : "/images/catalogue.png"
                    }
                    alt="product anme"
                    height="240"
                    width="240"
                />
                <div className="detail ml-4 justify-center max-w-[50%] text-black">
                    <h1 className="font-bold text-3xl">{product?.name}</h1>
                    <p className="font-bold text-red-700 text-2xl my-3">
                        Rp{product?.price}/Day
                    </p>
                    <p className="font-bold underline text-xl">Description</p>
                    <p>{product?.description}</p>
                </div>
                <div className="ml-3 text-center text-black">
                    <p>Listed by:</p>
                    <p className="font-bold text-xl text-black">
                        {product?.lenderName}
                    </p>
                    <p className="text-lg">{product?.lenderDom}</p>
                    <div className="div border-solid border-black">
                        <p className="text-lg justify-start">Rental Date</p>
                        <p className="text-lg border-solid border-black">
                            19 Oktober 2023-20 Oktober 2023
                        </p>
                    </div>
                    <button onClick={addToCartHandler} className="btn w-full mt-5 mb-2 h-4 bg-slate-100 text-red-700 hover:bg-white">
                        Add to bag
                    </button>
                    <a
                        role="button"
                        className="btn w-full h-4 text-white bg-red-700 hover:bg-red-600"
                    >
                        Rent now
                    </a>
                </div>
            </div>
        </div>
    );
}
