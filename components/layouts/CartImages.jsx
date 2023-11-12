import CartImage from "@/public/images/cart.png";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CartImages() {
    return (
        <div>
            <Link href="/cart">
                <Image src={CartImage} className="w-20 ml-4" />
            </Link>
        </div>
    );
}
