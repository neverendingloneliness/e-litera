import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Loading from "./components/loading/loading";
import { createBrowserRouter, RouterProvider } from "react-router";
import NotFound from "./pages/error/NotFound";
import Profile from "./pages/user/Profile";

const Landing = lazy(() => import("./pages/landing/Landing"));
const Login = lazy(() => import("./pages/auth/login/Login"));
const Register = lazy(() => import("./pages/auth/register/Register"));
const Home = lazy(() => import("./pages/user/Home"));
const Collections = lazy(() => import("./pages/user/Collections"));

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element:  <NotFound />},
  { path: "/home", element: <Home /> },
  { path: "/profile", element: <Profile /> },
  { path: "/collections", element: <Collections /> },
]);

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  );
}

export default App;
