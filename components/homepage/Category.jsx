import Image from "next/image";
import category1 from "@/public/images/category1.png";

const Category = ({ product }) => {
    return (
        <>
            <div className="flex justify-around mt-8">
                <Image
                    src={category1}
                    alt="product anme"
                    height="240"
                    width="300"
                />
                <Image
                    src={category1}
                    alt="product anme"
                    height="240"
                    width="300"
                />
                <Image
                    src={category1}
                    alt="product anme"
                    height="240"
                    width="300"
                />
                <Image
                    src={category1}
                    alt="product anme"
                    height="240"
                    width="300"
                />
            </div>
        </>
    );
};

export default Category;
