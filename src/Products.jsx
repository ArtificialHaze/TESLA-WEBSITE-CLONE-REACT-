import React from "react";
import cybertruckImage from "./assets/cybertruck.jpg";
import modelSImage from "./assets/model-s.jpg";
import modelXImage from "./assets/model-x.jpg";
import Product from "./Product";

const products = [
  {
    id: 1,
    image: cybertruckImage,
    title: "Cybertruck",
    description: "Description of Product 1",
    price: 19.99,
  },
  {
    id: 2,
    image: modelSImage,
    title: "Model S",
    description: "Description of Product 2",
    price: 29.99,
  },
  {
    id: 3,
    image: modelXImage,
    title: "Model X",
    description: "Description of Product 3",
    price: 39.99,
  },
  {
    id: 4,
    image: cybertruckImage,
    title: "Cybertruck",
    description: "Description of Product 5",
    price: 59.99,
  },
  {
    id: 5,
    image: modelSImage,
    title: "Model S",
    description: "Description of Product 6",
    price: 69.99,
  },
];

const Products = () => {
  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Products;
