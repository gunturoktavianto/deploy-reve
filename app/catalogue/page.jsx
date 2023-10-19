import React from "react";
import axios from "axios";
import Catalogue from "@/components/products/Catalogue";

const getProducts = async () => {
    const { data } = await axios.get(`${process.env.API_URL}/api/products`);
    return data;
};

const Catalogues = async () => {
    const productsData = await getProducts();

    return <Catalogue data={productsData} />;
};

export default Catalogues;
