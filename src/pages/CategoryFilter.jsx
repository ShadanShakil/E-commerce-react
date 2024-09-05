import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function CategoryFilter({category}){
    const [product, setProduct] = useState([]);
    const {slug} = useParams();

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/category/${slug}`).then((res)=>{
            // console.log(res?.data?.products);
            
            setProduct(res.data.products);

        }).catch((err)=>{console.log(err)})
    }, [])
    return (
        <div className="flex justify-center items-center flex-col flex-wrap">
        {
            product.map((data)=>{
                return(
                    <ProductCard item={data} key={data.id}/>
                )
            })
        }
    </div>
    )
}


export default CategoryFilter;