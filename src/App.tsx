import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import { Provider } from "react-redux";
import store from "./app/store";
import Header from "./components/Header/Header";
// import store from "./app/store";
// const ENDPOINT_RANDOM_USERS = "https://randomuser.me/api/?results=20";

const Container = () => (
  <div className="app">
    <Header />
    <div className="container">
      <Outlet />
    </div>
  </div>
);

// const Home = () => (
//   <>Get 20 users from ENDPOINT_RANDOM_USERS and display them: name only.</>
// );

// const User = () => (
//   <>
//     Display here the full content of 1 user from the 20: name, location and
//     email and make them editable (in the dom only)
//   </>
// );

const App = () => (
  <Provider store={store}>
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<Home />} />
        <Route path="*" element={<User />} />
      </Route>
    </Routes>
  </Provider>
);

export default App;
