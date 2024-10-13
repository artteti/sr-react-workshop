import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./components/Pages/HomePage";
import { CounterPage } from "./components/Pages/CounterPage";
import { GeneratorPage } from "./components/Pages/GeneratorPage";
import { RegistrationPage } from "./components/Pages/RegistrationPage";
import { StepperPage } from "./components/Pages/StepperPage";
import { ProductsPage } from "./components/Pages/ProductsPage";
import { BasketPage } from "./components/Pages/BasketPage";

export const routes = {
  HOME: {
    path: "/",
    //title:
  },
  COUNTER: {
    path: "/counter",
  },
  GENERATOR: {
    path: "/generator",
  },
  REGISTRATION: {
    path: "/registration",
  },
  STEPPER: {
    path: "/stepper",
  },
  PRODUCTS: {
    path: "/products",
  },
  BASKET: {
    path: "/basket",
  },
};

export const router = createBrowserRouter(
  [
    {
      path: routes.HOME.path,
      element: <Layout />,
      children: [
        {
          path: routes.HOME.path,
          element: <HomePage />,
        },
        {
          path: routes.COUNTER.path,
          element: <CounterPage />,
        },
        {
          path: routes.GENERATOR.path,
          element: <GeneratorPage />,
        },
        {
          path: routes.REGISTRATION.path,
          element: <RegistrationPage />,
        },
        {
          path: routes.STEPPER.path,
          element: <StepperPage />,
        },
        {
          path: routes.PRODUCTS.path,
          element: <ProductsPage />,
        },
        {
          path: routes.BASKET.path,
          element: <BasketPage />,
        },
      ],
    },
  ],
  {
    basename: "/sr-react-workshop/", // Specify your base URL here
  }
);
