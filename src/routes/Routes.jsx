import React from "react";
import {BrowserRouter,Switch} from "react-router-dom";
import RoutesWithLayout from "./RoutesWithLayout";
import {Auth,Home} from "../pages";
import {ThemeProvider} from "@material-ui/styles";
import theme from "../theme";

export default props=>{
    return(
        <ThemeProvider theme={theme}>


            <BrowserRouter>
                <Switch>
                    <RoutesWithLayout exact path={"/authentication"} component={Auth}/>
                    <RoutesWithLayout path={"/"} component={Home}/>

                </Switch>
            </BrowserRouter>

        </ThemeProvider>
    )
}
