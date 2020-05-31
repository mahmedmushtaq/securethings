import React from "react";
import {Grid, Typography,TextField} from "@material-ui/core";
import {AsphaltButton, TopBar} from "../../components";
import useStyles from "./signup.styles";

export default props=>{

    const classes = useStyles();

    return(
        <Grid container direction={"column"} style={{textAlign:"center",overflow:"hidden"}}>
           <Grid item>
               <TopBar/>
           </Grid>
            <br/><br/>

            <Grid item>
                <Typography variant={"h1"}>Sign up</Typography>
            </Grid>
            <br/><br/>

            <Grid item>
                <TextField
                 className={classes.textField}
                 type={"text"}
                 label={"username"}
                 placeholder={"username like test_user (only dash and underscore are allowed)"}
                />
            </Grid>
            <br/><br/>
            <Grid item>
                <TextField
                    type={"email"}
                    className={classes.textField}
                    label={"Email"}
                />
            </Grid>
            <br/><br/>

            <Grid item>
                <TextField
                    className={classes.textField}
                    type={"password"}
                    placeholder={"Password must be 12 digits "}
                    label={"Password"}
                />
            </Grid>
            <br/>
            <Grid item>
               <Typography className={classes.textField} style={{margin:"auto"}} variant={"subtitle6"} component={"p"}>
                   Your data is encrypted and other person cannot be able
                   to read even website owner cannot read this.
                 <span style={{color:"red"}}> Don't share your username and password with other
                 person</span>
               </Typography>
            </Grid>
            <br/>

            <Grid item>
                <AsphaltButton
                    className={classes.textField}
                >
                    Sign up
                </AsphaltButton>
            </Grid>
            <br/><br/>

        </Grid>
    )
}
