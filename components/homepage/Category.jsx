import Image from "next/image";
import category1 from "@/public/images/category1.png";
import category2 from "@/public/images/category2.png";
import category3 from "@/public/images/category3.png";
import category4 from "@/public/images/category4.png";

const Category = ({ product }) => {
    return (
        <>
            <div className="md:flex md:justify-around align-center mt-8 mx-12 text-center">
                <Image
                    className="pb-8"
                    src={category1}
                    alt="Men's Ware"
                    
                />
                <Image
                    className="pb-8"
                    src={category2}
                    alt="Men's Casual"
                    
                />
                <Image
                    className="pb-8"
                    src={category4}
                    alt="Women's Ware"
                    
                />
                <Image
                    src={category3}
                    alt="Women's Casual"
                    
                />
            </div>
        </>
    );
};

export default Category;
