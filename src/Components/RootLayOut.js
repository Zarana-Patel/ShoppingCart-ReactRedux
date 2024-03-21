import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import { Provider } from "react-redux"
import store from "../store/store"

const RootLayOut = () => {
  return (
    <div>
      <Provider store={store}>
        <NavBar />

        <Outlet />
      </Provider>
    </div>
  )
}

export default RootLayOut
