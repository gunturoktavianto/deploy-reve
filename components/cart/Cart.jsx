"use client";

import React from "react";
import CartContext from "@/context/CartContext";
import { useContext } from "react";
import Image from "next/image";


export default function Cart({ product }) {
    const { addItemToCart, deleteItemFromCart, cart } = useContext(CartContext);

    return (
        <>
            <div className="items-center justify-center py-3 px-48 mt-10 mb-60 bg-white">
                <h1 className="font-bold text-2xl">My Bag</h1>
                <div className="flex">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="text-black">
                                <tr>
                                    <th>Product</th>
                                    <th>Rental Date</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart?.cartItems?.map((cartItem) => (
                                    <tr>
                                        <td>
                                            <div className="flex">
                                                <div className="div w-16 h-16">
                                                    <img
                                                        src="{cartItem.image}"
                                                        alt=""
                                                    />
                                                </div>

                                                <p className="font-bold">
                                                    {cartItem.name.substring(
                                                        0,
                                                        10
                                                    )}
                                                    ...
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            19 Oktober 2023 - 20 Oktober 2023
                                        </td>
                                        <td>{cartItem.price}</td>
                                        <td>
                                            {" "}
                                            <a
                                                className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"
                                                onClick={() =>
                                                    deleteItemFromCart(
                                                        cartItem?.product
                                                    )
                                                }
                                            >
                                                Remove
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="ml-8 border border-black rounded-md">
                        <p className="font-bold">Shipping?</p>
                        
                    </div> */}
                </div>
            </div>
        </>
    );
}
