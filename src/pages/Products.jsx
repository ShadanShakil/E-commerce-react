import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
    //   console.log(res?.data?.products);
      setProducts(res?.data?.products);
      setLoading(false);
    }).catch((err)=>{
        console.log(err);
        setLoading(false);
    })
  }, []);


  return (
    <div className="container mx-auto">
        {
            loading ? (<h1 className="text-center text-3xl">Loading...</h1>)
            :(<div className="p-1 flex flex-wrap items-center justify-center">

                {
                    products.map((item) => (<ProductCard item = {item} key={item.id}/>))
                }
                </div>

            )
        }
    </div>
  )
}

export default Products;
