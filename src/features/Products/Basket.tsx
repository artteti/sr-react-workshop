import { FaBasketShopping } from "react-icons/fa6";
import { useAppSelector } from "../../hooks/redux";
import { selectCount } from "./basketSlice";

export const Basket = () => {
  const count = useAppSelector(selectCount);

  return (
    <div className="flex gap-1">
      <FaBasketShopping className="h-5 w-5 cursor-pointe" />
      <span>{count}</span>
    </div>
  );
};
