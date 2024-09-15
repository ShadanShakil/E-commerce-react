import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "./CategoryFilter";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function Category() {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        // console.log(res?.data);

        setCategory(res?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {category.map((data, ind) => (
        <div key={ind} className="flex flex-col justify-center items-center">
          <button
            type="button"
            onClick={() => navigate(`/categoryfilter/${data.slug}`)}
            className="block rounded my-5 mx-auto bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            {data.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Category;
