import React from "react";
import {BrowserRouter,Switch} from "react-router-dom";
import RoutesWithLayout from "./RoutesWithLayout";
import {
    SignUp,
    Home,
    SignIn,
    Dashboard,
    PasswordLists
} from "../pages";
import {ThemeProvider} from "@material-ui/styles";
import theme from "../theme";

export default props=>{
    return(
        <ThemeProvider theme={theme}>


            <BrowserRouter>
                <Switch>
                    <RoutesWithLayout
                        exact
                        path={"/sign-up"}
                        component={SignUp}
                    />

                    <RoutesWithLayout
                        exact
                        path={"/login"}
                        component={SignIn}
                    />

                    <RoutesWithLayout
                        exact
                        path={"/dashboard"}
                        component={Dashboard}
                    />

                    <RoutesWithLayout
                        exact
                        path={"/passwords-list"}
                        component={PasswordLists}
                    />


                    <RoutesWithLayout
                        path={"/"}
                        component={Home}
                    />


                </Switch>
            </BrowserRouter>

        </ThemeProvider>
    )
}
