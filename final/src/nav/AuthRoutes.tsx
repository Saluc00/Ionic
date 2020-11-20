import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";

export const AuthRoutes: React.FC = () => {
    return (
        <Switch>
            <Route exact path={'/login'} component={Login} />
            <Route exact path={"/signup"} component={SignUp} />
            <Redirect to={'/login'} from={'/'}/>
        </Switch>
    )
}

export default AuthRoutes