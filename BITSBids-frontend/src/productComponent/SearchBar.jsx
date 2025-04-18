import GetAllCategories from "../productComponent/GetAllCategories";
import ProductCard from "../productComponent/ProductCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ip from "../ip";
const SearchBar = () =>
{
    const [products, setProducts] = useState([]);
    const { query } = useParams();

    const handleSearch = async ()=>
    {
        let query = document.getElementById("search").value;
        console.log(query);
        //onSearch();
        const allProducts = await retrieveAllProducts();
        if(query === "")
        {
            if (allProducts) {
                setProducts(allProducts);
            }

        }
        else
        {
            console.log(allProducts.length);
            let i=0;
            let matchingProducts=[];
            while(i<allProducts.length)
            {
                let title = allProducts[i].title;
                let description = allProducts[i].description;
                console.log(title.toLowerCase().includes(query.toLowerCase()));
                if(title.toLowerCase().includes(query.toLowerCase()))
                {
                    matchingProducts.push(allProducts[i]);

                }
                // else if(description.toLowerCase().includes(query.toLowerCase()))
                // {
                //     matchingProducts.push(allProducts[i]);
                //
                // }

                //UNCOMMENT ABOVE TO ADD PRODUCT DESCRIPTION AS A PARAM FOR SEARCH
                i=i+1;
            }
            console.log(matchingProducts);
            if(matchingProducts)
            {
                setProducts(matchingProducts);
            }

        }

    }

    const retrieveAllProducts = async () => {
        const response = await axios.get("http://"+ ip + ":8080/api/product/all");

        return response.data;
    };

    const performSearch =async () =>
    {
        const response = await axios.get("http://"+ ip + ":8080/api/product?query=" + document.getElementById("search").textContent);
    }
    return(
        <div className="container search-bar">
            <div class="row height d-flex justify-content-center align-items-center">

                <div class="col-md-8">

                    <div class="search">
                        <i class="fa fa-search"></i>
                        <input id="search" class="form-control" placeholder="Search Here..." />
                            <button class="btn btn-primary" onClick={handleSearch}>Search</button>
                    </div>

                </div>

            </div>
            <div className="mt-2 mb-5">
                <div className="row">
                    <div className="col-md-10">
                        <div className="row row-cols-1 row-cols-md-4 g-4">

                            {products.map((product) => {
                                return <ProductCard item={product} />;
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;