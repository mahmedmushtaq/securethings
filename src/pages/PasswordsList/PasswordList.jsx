import React from "react";
import {MainLayout} from "../../layouts";
import {Typography,Grid} from "@material-ui/core";
import {List} from "./components/list";
import {AsphaltButton} from "../../components";

export default props=>{
    return(
        <MainLayout>
            <Grid container direction={"column"} justify={"center"} style={{margin:"0 20px"}}>
                <Grid item style={{margin:"0 auto"}}>
                    <Typography variant={"h6"}> All Store password lists</Typography>
                </Grid>
                <br/><br/>

                <Grid item style={{margin:"0 auto"}}>
                    <AsphaltButton >Create New One</AsphaltButton>
                </Grid>
                <br/><br/>

                <Grid item>
                    <Grid container>
                        <Grid item>

                            <List id={1} title={"New Password"}/>
                        </Grid>
                    </Grid>
                </Grid>



            </Grid>
        </MainLayout>
    )
}
