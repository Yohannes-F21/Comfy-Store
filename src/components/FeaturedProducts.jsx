import React from "react";
import SectionTitle from "./SectionTitle";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

// - For each `product`, destructure the attributes such as `title`, `price`, and `image`.

const FeaturedProducts = () => {
  const { products } = useLoaderData();
  console.log(products);

  return (
    <section className="pt-24">
      <SectionTitle text="Featured Products"></SectionTitle>
      <div className="grid  gap-4 md:grid-cols-2 lg:grid-cols-3 pt-12 ">
        {products.map((product) => {
          const { title, price, image } = product.attributes;
          //   const dollarsAmount = formatPrice(price); // other alternative
          return (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className="card bg-base-100  shadow-xl hover:shadow-2xl transition duration-300">
                <figure className="px-4 pt-4">
                  <img
                    src={image}
                    alt="featured product"
                    className="rounded-xl h-64 md:h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{title}</h2>
                  <div className="card-actions text-secondary">
                    <p>{formatPrice(price)}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProducts;
