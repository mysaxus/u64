import React, { createContext } from "react";
import {Route} from 'react-router-dom';

import { useState } from "react";

import Content from "./Content";
import News from "./News";
import About from "./About";
import TutorialLanding from "./TutorialLanding";
import Trivia from "./Trivia";
import Nav from "./Nav";
import Landing from "./Landing";
import Footer from "./Footer";
import Login from './Login';
import SignUp from "./Signup";
import { Account } from "./Account";

import { AuthProvider } from "./contexts/AuthContext";

function App() {

  return (
    <React.Fragment>
      <AuthProvider>
        <Nav />
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/content" component={Content}></Route>
        <Route exact path="/news" component={News}></Route>
        <Route exact path="/trivia" component={Trivia}></Route>
        <Route exact path="/tutoriallanding" component={TutorialLanding}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/account" component={Account}></Route>

        <Footer />
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
