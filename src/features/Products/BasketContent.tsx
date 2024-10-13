import { Text, Button } from "../../ui";
import { type Product } from "../../types/Product";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { UseSelector, useSelector } from "react-redux";
import { RootState } from "../../store";
import { remove, decreaseAmount, add } from "./basketSlice";

export const BasketContent = () => {
  const products = useSelector((state: RootState) => state.basket.products);
  const dispatch = useAppDispatch();
  return (
    <div>
      <Text>Products in your basket:</Text>

      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex my-3 gap-6">
            <Text>{product.name}</Text>
            <Text>Price: {product.price.toString()} zl.</Text>
            <div className="flex gap-2">
              <Button
                label="-"
                className="px-2 text-xs  bg-white text-black hover:bg-blue-50"
                onClick={() => {
                  dispatch(decreaseAmount(product));
                }}
              />
              <Text>{product.amount!.toString()}</Text>
              <Button
                label="+"
                className="px-2 text-xs  bg-white text-black hover:bg-blue-50"
                onClick={() => {
                  dispatch(add(product));
                }}
              />
            </div>
            <Text>Total price: {product.totalPrice!.toString()} zl.</Text>
            <Button
              label="Delete"
              className="px-2 text-xs"
              onClick={() => {
                dispatch(remove(product.id));
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
