import React from "react";
import {Grid, Typography,TextField} from "@material-ui/core";
import {AsphaltButton, TopBar} from "../../components";
import useStyles from "../SignUp/signup.styles";

export default props=>{

    const classes = useStyles();

    return(
        <Grid container direction={"column"} style={{textAlign:"center",overflow:"hidden"}}>
            <Grid item>
                <TopBar/>
            </Grid>
            <br/><br/>

            <Grid item>
                <Typography variant={"h1"}>Sign in</Typography>
            </Grid>
            <br/><br/>

            <Grid item>
                <TextField
                    className={classes.textField}
                    type={"text"}
                    label={"username"}

                />
            </Grid>
            <br/><br/>


            <Grid item>
                <TextField
                    className={classes.textField}
                    type={"password"}
                    label={"password"}
                />
            </Grid>
            <br/>



            <Grid item>
                <AsphaltButton
                    className={classes.textField}
                    color={"secondary"}
                >
                    Sign in
                </AsphaltButton>
            </Grid>
            <br/><br/>

        </Grid>
    )
}
