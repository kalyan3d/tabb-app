import "./App.scss";
import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import User from "./components/user/User";
import CreateProfile from "./components/profile-form/CreateProfile";
import PrivateRoute from "./components/routing/PrivateRouting";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <main className="container p-3">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/user" component={User} />
              <PrivateRoute
                exact
                path="/user/profile"
                component={CreateProfile}
              />
            </Switch>
          </main>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
