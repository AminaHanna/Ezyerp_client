import './App.css';
import Counter from './components/Dashboard/File/Home/Counter';
import DropSelect from './components/Dashboard/File/Home/DropSelect';
import Home from './components/Dashboard/File/Home/Home';
import ProductDetails from './components/Dashboard/File/Products/ProductDetails';
import ProductForm from './components/Dashboard/File/Products/ProductForm';
import ProductsTable from './components/Dashboard/File/Products/ProductsTable';
import Receipt from './components/Dashboard/File/Receipt/Receipt';
import Sales from './components/Dashboard/File/Sales/Sales';
import SalesTable from './components/Dashboard/File/Sales/SalesTable';
import Layout from './components/Layout/Layout';
import { AuthProvider } from './components/SignIn/Auth/AuthContext';
import PrivateRoute from './components/SignIn/Auth/PrivateRoute';
import SignIn from './components/SignIn/SignIn';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/signin",
      element: <SignIn/>,
    },
    {
      path: "/",
      element: <PrivateRoute>
                  <Layout/>
                </PrivateRoute>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "product",
          element: <ProductForm/>,
        },
        {
          path: "product-table",
          element: <ProductsTable/>,
        },
      ]
    },
    {
      path: "/product",
      element: <ProductForm/>,
    },
    {
      path: "/productview",
      element: <ProductDetails/>,
    },
    {
      path: "/product-table",
      element: <ProductsTable/>,
    },
    {
      path: "/counter",
      element: <Counter/>,
    },
    {
      path: "/sales",
      element: <Sales/>,
    },
    {
      path: "/sales-table",
      element: <SalesTable/>,
    },
    {
      path: "/receipt",
      element: <Receipt/>
    },
    {
      path: "/select",
      element: <DropSelect/>,
    }
  ]);

  return (
    <>
    <AuthProvider>
      <RouterProvider router = {router} />
    </AuthProvider>
    </>
  )
}

export default App
