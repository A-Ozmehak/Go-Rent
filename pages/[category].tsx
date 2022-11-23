import React from "react";
import { useRouter } from 'next/router'

const CategoryPage = () => {
   const {
        query: { category }
    } = useRouter()


    return(
        <div>
            <h1>{category}</h1>
        </div>
    )
};

export default CategoryPage;