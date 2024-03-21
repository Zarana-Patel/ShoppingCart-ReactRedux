import "bootstrap/dist/css/bootstrap.min.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import DashBoard from "./Components/Dashboard"
import RootLayOut from "./Components/RootLayOut"
import Cart from "./Components/Cart"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<DashBoard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    )
  )
  return <RouterProvider router={router}></RouterProvider>
}

export default App
