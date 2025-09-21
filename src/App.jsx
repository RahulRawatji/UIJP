
import { BrowserRouter, Route, Routes } from "react-router";

import Layout from "./components/Layout/Layout";
import ErrorPage from "./components/common/ErrorPage";
import OrderList from "./components/OrdersList/OrdersList";
import Homepage from "./components/Homepage/Homepage";

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Homepage/>} />
          <Route path="/orders" element={<OrderList/>} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
