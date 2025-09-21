
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import ErrorPage from "./components/common/ErrorPage";
import './App.css'
import OrderList from "./components/OrdersList/OrdersList";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/orders" element={<OrderList/>} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
