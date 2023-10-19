import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductItem({ product }) {
    return (
        <Link href={`/catalogue/${product._id}`}>
            <div className="catalogue">
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
                <p className="text-black">{product.name}</p>
                <p className="text-red-600 font-bold">Rp{product.price}/Day</p>
            </div>
        </Link>
    );
}
