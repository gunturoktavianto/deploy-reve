"use client";

import React from "react";

import ProductItem from "./ProductItem";

const Catalogue = ({ data }) => {
    return (
        <>
            <div className="bg-white flex justify-around pt-20 pb-64">
                {data?.products?.map((product) => (
                    <ProductItem key={product?._id} product={product} />
                ))}
            </div>
        </>
    );
};

export default Catalogue;
