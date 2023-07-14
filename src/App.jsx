import { Route, Routes } from "react-router-dom";
import Nav from "./components/global/nav/Nav";
import Shop from "./page/shop/Shop";
import Home from "./page/home/page";
import ShopDetail from "./page/shopDetail/ShopDetail";
import Order from "./page/order/Order";
import CheckOut from "./page/checkout/CheckOut";
import Message from "./page/message/Message";
import NotFound from "./page/404/NotFound";
function App() {
  return (
    <div className="">
      <Nav />
      <Routes>
        <Route exact path="/">
          <Route index element={<Home />} />
          <Route path="/shop">
            <Route index element={<Shop />} />
            <Route path=":id" element={<ShopDetail />} />
          </Route>
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/order" element={<Order />} />
          <Route path="/message" element={<Message />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
