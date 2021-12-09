import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Appointment from "./Components/Pages/Appointment/Appointment/Appointment";
import Dashboard from "./Components/Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Components/Pages/Home/Home/Home";
import NotFound from "./Components/Pages/Home/NotFound/NotFound";
import Login from "./Components/Pages/Log/Login/Login";
import PrivateRoute from "./Components/Pages/Log/Private/PrivateRoute";
import Register from "./Components/Pages/Log/Register/Register";
import Navigation from "./Components/Pages/Shared/Navigation/Navigation";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/error">
              <NotFound></NotFound>
            </Route>
            <Route path="/regi">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
