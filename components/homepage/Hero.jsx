import React from "react";
import Image from "next/image";
import hero from "@/public/images/heroimage.png";
import Link from "next/link";

export default function Hero() {
    return (
        <Link
            className="pt-8 flex justify-center w-full sm:m-auto"
            href="/catalogue"
        >
            <Image src={hero} />
        </Link>
    );
}
