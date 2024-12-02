import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route element={<Home />} path="/" />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
