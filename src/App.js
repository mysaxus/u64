import React from "react";
import {Route} from 'react-router-dom';


import Content from "./Content";
import News from "./News";
import About from "./About";
import TutorialLanding from "./TutorialLanding";
import RealNav from "./RealNav";
import Landing from "./Landing";
import Footer from "./Footer";
import Login from './Login';
import SignUp from "./Signup";
import ForgotPassword from "./ForgotPassword";
import { Account } from "./Account";
import PrivateRoute from "./PrivateRoute";

import { AuthProvider } from "./contexts/AuthContext";
import RealTutorial from "./RealTutorial";

function App() {

  return (
    <React.Fragment>
      <AuthProvider>
        <RealNav />
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/content" component={Content}></Route>
        <Route exact path="/news" component={News}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/forgotpassword" component={ForgotPassword}></Route>
        <PrivateRoute exact path="/account" component={Account}></PrivateRoute>
        <PrivateRoute exact path="/tutorial" component={RealTutorial}></PrivateRoute>

        <Footer />
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
