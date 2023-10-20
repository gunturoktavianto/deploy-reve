import Image from "next/image";
import category1 from "@/public/images/category1.png";
import category2 from "@/public/images/category2.png";
import category3 from "@/public/images/category3.png";
import category4 from "@/public/images/category4.png";

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
                    src={category2}
                    alt="product anme"
                    height="240"
                    width="300"
                />
                <Image
                    src={category3}
                    alt="product anme"
                    height="240"
                    width="300"
                />
                <Image
                    src={category4}
                    alt="product anme"
                    height="240"
                    width="300"
                />
            </div>
        </>
    );
};

export default Category;
