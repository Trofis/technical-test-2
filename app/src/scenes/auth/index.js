import React from "react";
import { Route, Switch } from "react-router-dom";
import { signIn } from "./signin";
import { signUp } from "./signup";

const Auth = () => {
  return (
    <Switch>
      <Route path="/auth/signup" component={signUp} />
      <Route path="/auth" component={signIn} />
    </Switch>
  );
};

export default Auth;
