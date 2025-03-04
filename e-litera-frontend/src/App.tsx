import { BrowserRouter, Route, Routes } from "react-router"
import Landing from "./pages/landing/Landing"
import Login from "./pages/auth/login/Login"
import Register from "./pages/auth/register/Register"
import { Provider } from "react-redux"
import store from "./store/store"
import { useState } from "react"
import Loading from "./components/loading/loading"

function App() {
  const [loading, setIsLoading] = useState(true)
  setTimeout (() => setIsLoading(false), 6000)  

  return loading ? <Loading/> : (
    <>
    <Provider store={store} >
       <BrowserRouter>
          <Routes>
              <Route path="/">
                    <Route index element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<Register />} />
              </Route>
          </Routes>
       </BrowserRouter>
      </Provider> 
    </>
  )
}

export default App
