import "./App.css";
import Home from "./containers/Home/Home";
import SignUp from "./containers/SignUp/SignUp";
import NavBar from "./containers/NavBar/NavBar";
import Login from "./containers/Login/Login";
import About from "./containers/About/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./containers/Footer/Footer";
import ProfileCook from "./containers/ProfileCook/ProfileCook";
import ProfileClient from "./containers/ProfileClient/ProfileClient";
import ProductPage from "./containers/ProductPage/ProductPage";
import CartPage from "./containers/CartPage/CartPage";
import OrderPage from "./containers/OrderPage/OrderPage";
import PaymentCardPage from "./containers/PaymentCardPage/PaymentCardPage";
// import ProfileCookGlobal from "./containers/ProfileCookGlobal/ProfileCookGlobal";
function App() {
  return (
    <div className="appStyle">
      <Router>
        <Route path="/" component={NavBar} />

        <div className="appContainer">
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cook" component={ProfileCook} />
          <Route exact path="/client" component={ProfileClient} />
          <Route exact path="/product" component={ProductPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/order" component={OrderPage} />
          <Route exact path="/card" component={PaymentCardPage} />
        </div>
        <Route path="/" component={Footer} />
      </Router>
    </div>
  );
}

export default App;
