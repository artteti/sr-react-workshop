import { Button, Text } from "../../ui";

import { type Product } from "../../types/Product";
import { useAppDispatch } from "../../hooks/redux";
import { add } from "./basketSlice";

const products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 3000,
  },
  {
    id: 2,
    name: "Keyboard",
    price: 700,
  },
  {
    id: 3,
    name: "Mouse",
    price: 70,
  },
];
export const ProductsList = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Text>Products:</Text>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex my-3">
            <Text>
              {product.name} ({product.price.toString()} zl.)
            </Text>
            <Button
              label="+"
              className="ml-3 px-2 text-xs"
              onClick={() => dispatch(add(product))}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
