import { Link, NavLink } from "react-router-dom";
import { routes } from "../../routes";
import { Basket } from "../../features/Products/Basket";

type Props = {
  to: string;
  children: string;
};
const WaNavLink = ({ to, children }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isActive
          ? "text-blue-500"
          : isPending
            ? "text-yellow-600"
            : "dark:text-slate-300"
      }
    >
      {children}
    </NavLink>
  );
};
export const Menu = () => {
  return (
    <div>
      <nav className="relative mb-6">
        <ul className="flex">
          <li className="mr-4">
            <WaNavLink to={routes.HOME.path}>Home</WaNavLink>
          </li>
          <li className="mr-4">
            <WaNavLink to={routes.COUNTER.path}>Counter</WaNavLink>
          </li>
          <li className="mr-4">
            <WaNavLink to={routes.GENERATOR.path}>Generator</WaNavLink>
          </li>
          <li className="mr-4">
            <WaNavLink to={routes.REGISTRATION.path}>Registration</WaNavLink>
          </li>
          <li className="mr-4">
            <WaNavLink to={routes.STEPPER.path}>Stepper</WaNavLink>
          </li>
          <li className="mr-4">
            <WaNavLink to={routes.PRODUCTS.path}>Products</WaNavLink>
          </li>
        </ul>
        <div className="absolute top-0 right-0">
          <Link to={routes.BASKET.path} className="dark:text-slate-300">
            <Basket />
          </Link>
        </div>
      </nav>
    </div>
  );
};
